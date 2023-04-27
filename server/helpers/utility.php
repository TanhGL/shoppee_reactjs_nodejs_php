<?php

use PHPMailer\PHPMailer\PHPMailer;

include_once '../libs/PHPMailer-master/src/PHPMailer.php';
include_once '../libs/PHPMailer-master/src/SMTP.php';
include_once '../libs/PHPMailer-master/src/Exception.php';

function fixSqlInjection($str)
{
    // abc\okok -> abc\\okok
    //abc\okok (user) -> abc\okok (server) -> sql (abc\okok) -> xuat hien ky tu \ -> ky tu dac biet -> error query
    //abc\okok (user) -> abc\okok (server) -> convert -> abc\\okok -> sql (abc\\okok) -> chinh xac
    $str = str_replace('\\', '\\\\', $str);
    //abc'okok -> abc\'okok
    //abc'okok (user) -> abc'okok (server) -> sql (abc'okok) -> xuat hien ky tu \ -> ky tu dac biet -> error query
    //abc'okok (user) -> abc'okok (server) -> convert -> abc\'okok -> sql (abc\'okok) -> chinh xac
    $str = str_replace('\'', '\\\'', $str);

    return $str;
}

function sendEmail($email, $token)
{
    $link = "<h2 style='background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;'>" . $token . "</h2>";

    $mail = new PHPMailer();
    $mail->CharSet = "utf-8";
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Username = "shopbee.vip";
    $mail->Password = "shopbee.vip123";
    $mail->SMTPSecure = "ssl";
    $mail->Host = "ssl://smtp.gmail.com";
    $mail->Port = "465";
    $mail->From = "shopbee.vip@gmail.com";
    $mail->FromName = "ShopBee Việt Nam";
    $mail->addAddress($email, "Hello");
    $mail->Subject = "Mã xác thực";
    $mail->isHTML(true);
    $mail->Body =
        "<div style='font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2'>
        <div style='margin:50px auto;width:70%;padding:20px 0'>
            <div style='border-bottom:1px solid #eee'>
                <a href='vudeptrai.xyz' style='font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600'>ShopBee</a>
            </div>
            <p style='font-size:1.1em'>Xin chào,</p>
            <p>Cảm ơn bạn đã lựa chọn ShopBee. Sử dụng mã OTP sau để hoàn tất thủ tục lấy lại mật khẩu của bạn. OTP có giá trị trong 5 phút.</p>
            " . $link . "
            <p style='font-size:0.9em;'>Trân trọng,<br />ShopBee</p>
            <hr style='border:none;border-top:1px solid #eee' />
            <div style='float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300'>
                <p>ShopBee Inc</p>
                <p>Trái đất, Hệ mặt trời</p>
                <p>Thiên hà Milky Way</p>
            </div>
        </div>
    </div>";


    if ($mail->Send()) {
        return true;
    }
    return false;
}