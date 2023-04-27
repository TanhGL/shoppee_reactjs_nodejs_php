<?php

// Import thư viện
include_once '../../configs/core.php';
include_once '../../libs/php-jwt-master/src/BeforeValidException.php';
include_once '../../libs/php-jwt-master/src/ExpiredException.php';
include_once '../../libs/php-jwt-master/src/SignatureInvalidException.php';
include_once '../../libs/php-jwt-master/src/JWT.php';
include_once '../../helpers/cors.php';
include_once '../../db/dbhelper.php';

cors();

use Firebase\JWT\JWT;

use PHPMailer\PHPMailer\PHPMailer;

include_once '../../libs/PHPMailer-master/src/PHPMailer.php';
include_once '../../libs/PHPMailer-master/src/SMTP.php';
include_once '../../libs/PHPMailer-master/src/Exception.php';

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

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;

// Xử lý backend
// B1. Xác thực email có tồn tại trong hệ thống
// B2. Kiểm tra email có tồn tại trong bảng token
// B3. Kiểm tra xem token trong hệ thống có tồn tại quá 5p => xóa token hết hạn.
// B4. Nếu thời gian tạo chưa quá 5p gửi email hoặc báo token hết hạn
// B5. Gửi 6 số ngẫu nhiên đến email người dùng đồng thời lưu vào database

// Check xem username có tồn tại trong hệ thống
$sql = "SELECT * FROM users WHERE email = '$email'";
$user = executeResult($sql, true);

// B1. Xác thực email có tồn tại trong hệ thống 
if ($user) {
    // B2. Kiểm tra email có tồn tại trong bảng token
    $email = $user['email'];
    $sql = "SELECT * FROM token WHERE email = '$email'";
    $result = executeResult($sql, true);

    // B3. Kiểm tra xem token trong hệ thống có tồn tại quá 5p => xóa token hết hạn.
    if ($result) {
        // Kiểm tra thời gian tồn tại của token
        $sql = "SELECT * FROM token WHERE email = '$email' 
        AND created_at > now() - interval 5 minute limit 0,1 ";
        $result = executeResult($sql);


        // B4. Nếu thời gian tạo chưa quá 5p gửi email hoặc báo token hết hạn
        if ($result) {
            // Token tồn tại chưa đến 5p => không gửi mail mới
            // Kiểm tra token người dùng gửi lên
            $res = [
                'status' => 0,
                'message' => "Vui lòng kiểm tra email"
            ];
            echo json_encode($res);
        } else {
            // B5. Gửi 6 số ngẫu nhiên đến email người
            // Xóa token cũ và lưu token mới vào database
            $sql = "DELETE FROM token WHERE email = '$email'";
            execute($sql);

            $token = rand(0, 999999);
            sendEmail($email, $token);

            // Thêm token vào database
            $sql = "INSERT INTO token (email, token) VALUES ('$email', '$token')";
            execute($sql);

            http_response_code(200);
            $res = [
                'status' => 1,
                'message' => "Send Email success"
            ];
            echo json_encode($res);
        }
    } else {
        // B5. Gửi 6 số ngẫu nhiên đến email người dùng đồng thời lưu vào database
        $token = rand(0, 999999);
        sendEmail($email, $token);

        // Thêm token vào database
        $sql = "INSERT INTO token (email, token) VALUES ('$email', '$token')";
        execute($sql);

        http_response_code(200);
        $res = [
            'status' => 1,
            'message' => "Send Email success"
        ];
        echo json_encode($res);
    }
} else {
    $res = [
        'status' => 0,
        'message' => "Email không tồn tại"
    ];
    echo json_encode($res);
}