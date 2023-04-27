<?php

// Import thư viện
include_once '../../helpers/getBearerToken.php';
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



$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$total = $data->total;
$address = $data->address;
$phone = $data->phone;
$fullname = $data->fullname;
$products = $data->products;
$id_bill = $data->id_bill;

function renderProduct($products)
{
    $list = '';
    for ($i = 0; $i < count($products); $i++) {
        $index = $i + 1;
        $name = $products[$i]->nameProduct;
        $quantity =  $products[$i]->quantity;
        $price = $products[$i]->price;
        $totalPrice = $quantity * $price;

        $price_format = number_format($price, 0, '', ',');
        $totalPrice_format = number_format($totalPrice, 0, '', ',');


        $list .= "<tr>
                <td style='padding: 15px 0;'>$index</td>
                <td style='padding: 15px 0;'>$name</td>
                <td style='text-align: center; padding: 15px 0;'>$quantity</td>
                <td style='text-align: center; padding: 15px 0;'>$price_format VNĐ</td>
                <td style='text-align: right; padding: 15px 0;'>$totalPrice_format VNĐ</td>
            </tr>";
    }

    return $list;
}


function sendBill($email, $total, $address, $phone, $fullname, $products, $id_bill, $created)
{
    // number_format($price, 0, '', ',');

    $total = number_format($total, 0, '', ',');
    $listProduct = renderProduct($products);

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
    $mail->Subject = "Hóa đơn";
    $mail->isHTML(true);
    $mail->Body =
        "<div style='font-size: 18px; 
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15)'>
        <div style='display: flex;
        flex: 1;
        align-items: center;
        font-family: sans-serif;'>
            <img style='height: 100px' src='https://i.ibb.co/4NwBxtP/ShopBee.png'>
            <div style='display: flex;
                margin-left: auto'>
                <p style='font-size: 50px;
                    line-height: 30px;
                    letter-spacing: 4px;'>
                    Shop
                </p>
                <p style='font-size: 50px;
                    line-height: 30px;
                    color: orange;
                    letter-spacing: 4px;'>
                    Bee
                </p>
            </div>
        </div>
    
        <div style='display: flex;
            flex: 1;'>
            <div>
                <p>Tên khách hàng: $fullname</p>
                <p>Địa chỉ: $address</p>
                <p>Email: $email</p>
                <p>SĐT: $phone</p>
            </div>
            <div style='margin-left: auto'>
                <p>Mã hóa đơn: <strong>$id_bill</strong></p>
                <p>Ngày lập hóa đơn: $created</p>
            </div>
        </div>
    
        <table class='line-items-container' style='width: 100%;
            border-collapse: collapse;
            padding-bottom: 25px;
            border-bottom: 2px solid #ddd;'>
            <thead>
                <tr>
                    <th style='text-align: left;
                        color: #999;
                        border-bottom: 2px solid #ddd;
                        padding: 10px 0 15px 0;
                        font-size: 14px;
                        text-transform: uppercase;' class='heading-index'>
                        STT
                    </th>
    
                    <th style='text-align: left;
                        color: #999;
                        border-bottom: 2px solid #ddd;
                        padding: 10px 0 15px 0;
                        font-size: 14px;
                        text-transform: uppercase;' class='heading-description'>
                        Tên sản phẩm
                    </th>
    
                    <th style='text-align: center;
                        color: #999;
                        border-bottom: 2px solid #ddd;
                        padding: 10px 0 15px 0;
                        font-size: 14px;
                        text-transform: uppercase;'>
                        Số lượng
                    </th>
    
                    <th style='text-align: center;
                        color: #999;
                        border-bottom: 2px solid #ddd;
                        padding: 10px 0 15px 0;
                        font-size: 14px;
                        text-transform: uppercase;'>
                        Đơn giá
                    </th>
    
                    <th style='text-align: right;
                        color: #999;
                        border-bottom: 2px solid #ddd;
                        padding: 10px 0 15px 0;
                        font-size: 14px;
                        text-transform: uppercase;' class='heading-subtotal'>
                        Thành tiền
                    </th>
    
                </tr>
            </thead>
            <tbody>
            $listProduct
            </tbody>
        </table>


    <table style='width: 100%;
                border-collapse: collapse;'>
        <thead>
            <tr>

                <th style='text-align: right;
                            text-align: right;
                            color: #999;
                            font-size: 14px;
                            text-transform: uppercase;
                            padding-top: 20px'>
                    Tổng tiền
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style='text-align: right; 
                            font-size: 1.75em; 
                            font-weight: bold;
                            color: #fb7578;
                            padding-bottom: 25px;
                            padding-top: 25px;
                            border-bottom: 2px solid #ddd;'>
                            $total VNĐ
                </td>
            </tr>
        </tbody>
    </table>

    <div style='margin-top: 50px;'>
        <div style='float: right;
                    margin-top: 5px;
                    font-size: 16px;
                    color: #ccc;'>
            <span style='padding: 0 5px;
                        color: black;'>shopbee.vip@gmail.com</span>
            <span style='padding: 0 5px;
                        color: black;'>0981877669</span>
            <a href='https://vudeptrai.xyz'>vudeptrai.xyz</a>
        </div>
        <div style='font-size: 26px'>
            <img src='https://github.com/anvilco/html-pdf-invoice-template/raw/main/img/heart.png' alt='heart'>
            <span>Thank you!</span>
        </div>
    </div>
</div>";


    if ($mail->Send()) {
        return true;
    }
    return false;
}

$access_token = getBearerToken();



// Kiểm tra xem access token có tồn tại
if ($access_token) {
    try {
        // Giải mã token
        $decoded = JWT::decode($access_token, $MY_SECRET_KEY, array('HS256'));
        http_response_code(200);
        $username = $decoded->username;

        if ($decoded) {
            $sql = "SELECT created_at FROM bills WHERE id = $id_bill";
            $created = executeResult($sql, true);


            // sendEmail
            // for ($i = 0; $i < count($data); $i++) { // $idProduct=$data[$i]->id;
            // $quantity = $data[$i]->quantity;
            // };

            sendBill($email, $total, $address, $phone, $fullname, $products, $id_bill, $created['created_at']);

            // echo json_encode(array(
            //     'message' => $products
            // ));


        } else {
            echo json_encode(array(
                'message' => "Access denied"
            ));
        }
    } catch (Exception $e) {
        echo json_encode(array(
            'message' => "Access denied",
            "error" => $e->getMessage()
        ));
    }
} else {
    echo json_encode(array('message' => "Access denied"));
}