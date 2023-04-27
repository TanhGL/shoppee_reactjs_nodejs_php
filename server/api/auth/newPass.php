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
$token = $data->otp;
$password = $data->password;

// Xử lý backend
// B1. Người dùng gửi token và mật khẩu mới lên
// B2. Hệ thống sẽ kiểm tra token còn tồn tại hay không 
// B3. Nếu token tồn tại => cho đổi mật khẩu => Xóa token cũ
// B4. Nếu token hết hạn => báo cho người dùng token hết hạn và không cho đổi mật khẩu


// B1. Kiểm tra xem token trong hệ thống có tồn tại quá 5p
$sql = "SELECT * FROM token WHERE token = '$token' 
AND created_at > now() - interval 5 minute limit 0,1 ";
$result = executeResult($sql);

// B2. Hệ thống sẽ kiểm tra token còn tồn tại hay không 
if ($result) {
    // B3. Nếu token tồn tại => cho đổi mật khẩu => Xóa token cũ

    $hash_password = password_hash($password, PASSWORD_BCRYPT);

    // Đổi mật khẩu
    $sql = "UPDATE users set hash_password = '$hash_password'";
    execute($sql);

    // Xóa token cũ
    $sql = "DELETE FROM token WHERE token = '$token'";
    execute($sql);
    $res = [
        'status' => 1,
        'message' => "Đổi mật khẩu thành công"
    ];
    echo json_encode($res);
} else {
    // B4. Nếu token hết hạn => báo cho người dùng token hết hạn 
    // xóa token cũ và không cho đổi mật khẩu

    // Xóa token cũ
    $sql = "DELETE FROM token WHERE token = '$token'";
    execute($sql);

    $res = [
        'status' => 0,
        'message' => "Mã xác thực đã hết hạn hoặc không đúng"
    ];
    echo json_encode($res);
}