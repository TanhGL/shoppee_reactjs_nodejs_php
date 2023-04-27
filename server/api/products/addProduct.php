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

$data = json_decode(file_get_contents("php://input"));
$name = $data->name;
$price = $data->price;
$quantity = $data->quantity;
$images = $data->images;
$id_loai = $data->id_loai;

// Lấy token từ header
$access_token = getBearerToken();

// Kiểm tra xem access token có tồn tại
if ($access_token) {
    try {
        // Giải mã token
        $decoded = JWT::decode($access_token, $MY_SECRET_KEY, array('HS256'));
        http_response_code(200);


        if ($decoded->role === 'admin') {
            $sql = "INSERT INTO products (name, price, quantity, images, id_loai) 
            VALUES ('$name','$price','$quantity','$images','$id_loai')";
            execute($sql);

            echo json_encode(array(
                'message' => "Success"
            ));
        } else {
            echo json_encode(array(
                'message' => "Ban khong phai la admin"
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