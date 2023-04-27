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

$data = json_decode(file_get_contents("php://input"));
$username = $data->username;
$password = $data->password;


// Check xem username có tồn tại trong hệ thống
$sql = "SELECT * FROM users WHERE username = '$username'";
$user = executeResult($sql, true);

if ($user) {

    // $hash = password_hash($password, PASSWORD_BCRYPT);
    $is_password_valid = password_verify($password, $user['hash_password']);

    if ($is_password_valid) {
        // Tạo token khi đăng nhập thành công
        $token = array(
            "name" => $user['fullname'],
            "username" => $user['username'],
            "avatar" => $user['avatar'],
            "role" => $user['role']
        );

        // Mã hóa token
        $access_token = JWT::encode($token, $MY_SECRET_KEY);

        // Sever trả về
        http_response_code(200);
        echo json_encode(array('access_token' => $access_token));
    } else {
        echo json_encode(array('message' => "Mật khẩu không chính xác"));
    }
} else {
    echo json_encode(array('message' => "Người dùng không tồn tại"));
}