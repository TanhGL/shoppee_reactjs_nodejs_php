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
$billArr = $data;

// Lấy token từ header
$access_token = getBearerToken();

// Kiểm tra xem access token có tồn tại
if ($access_token) {
    try {
        // Giải mã token
        $decoded = JWT::decode($access_token, $MY_SECRET_KEY, array('HS256'));
        http_response_code(200);
        $username = $decoded->username;

        if ($decoded) {
            // Tạo bill mới
            $id_bill = rand(0, 99999999);

            $sql = "INSERT INTO bills (id, id_user)
            VALUES ($id_bill,(SELECT id FROM users WHERE username = '$username'))";
            execute($sql);


            echo json_encode(array(
                'id_bill' => $id_bill
            ));

            for ($i = 0; $i < count($billArr); $i++) {
                $idProduct = $billArr[$i]->id;
                $quantity = $billArr[$i]->quantity;

                $sql = "INSERT INTO bill_detail (id_bill, id_product, quantity) 
                VALUES ($id_bill,$idProduct,$quantity);";
                execute($sql);
            };
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