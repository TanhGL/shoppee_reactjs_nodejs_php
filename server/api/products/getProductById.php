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
$id = $data->id;

// Lấy token từ header
$access_token = getBearerToken();


// Kiểm tra xem access token có tồn tại
if ($access_token) {
    try {
        // Giải mã token
        $decoded = JWT::decode($access_token, $MY_SECRET_KEY, array('HS256'));
        http_response_code(200);

        // $decoded->role === 'admin'

        if ($decoded->role === 'admin') {
            $sql = "SELECT sp.id, sp.price, sp.quantity, sp.name 
            AS nameProduct, sp.images, sp.content, sp.create_at, lsp.id as categoryId, lsp.name 
            AS nameCategory FROM products sp JOIN categories lsp 
            ON sp.id_loai = lsp.id WHERE sp.id = $id";
            $product = executeResult($sql, true);

            echo json_encode($product);
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