<?php
require 'connectDB.php';

$misDatos = file_get_contents("php://input",true);
$datos = json_decode($misDatos);

$sql = "select * from usuarios where nombre='$datos->username' and password='$datos->password';";

$conn = connect_db();
$response = mysqli_query($conn,$sql);

if ($response->num_rows>0){

    //set session cookie
    $lifetime=600;
    session_start();
    $_SESSION['user'] = $datos->username;

    //Send grant
    echo '{
        "success": true,
        "message": "Access Grant"
    }';
} else {
    echo '{
        "success": false,
        "message": "Password or user incorrect"
    }';
}


mysqli_close($conn);
?>