<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Allow-Headers: Content-Type");
session_start();

require 'connectDB.php';

//if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$miarray = file_get_contents("php://input", true);
$datos = json_decode($miarray);

if (isset($_SESSION['user'])) {
    //cambiar a modificar
    $conn = connect_db();
    $usuario = $_SESSION['user'];
    $sql = "update usuarios set nombre='$datos->username', email='$datos->email', password ='$datos->password'  where nombre='$usuario';";
    $rs = mysqli_query($conn, $sql);

    if ($rs) {
        echo '{
                "success": true,
                "message": "User modify succesfully"
            }';
        unset($_SESSION);
        session_destroy();
    } else {
        var_dump($sql);
        echo '{
                "success": false,
                "message": "Database fail"
            }';
    }

} else {
    echo '{
            "success": false,
            "message": "User not logged in"
        }';
}
mysqli_close($conn);
//}
