<?php
require 'connectDB.php';

$misDatos = file_get_contents("php://input",true);
$datos = json_decode($misDatos);


//Verifica si los datos son correctos
//que el usuario no este en la base de datos

if(!empty($datos->username ) && !empty($datos->password) && !empty($datos->email)){
    

    //buscar si el usuario ya existe
    $sql = "select nombre from usuarios where nombre='$datos->username';";

    $conn = connect_db();
    $response = mysqli_query($conn,$sql);
    if ($response->num_rows>0){
        echo '{
            "success": false,
            "message": "User already on database"
        }';
    //crea el usuario
    }else {
        $sql = "insert into usuarios (nombre,password,email) 
            values ('$datos->username','$datos->password','$datos->email');";
    
    
        $response = mysqli_query($conn,$sql);
        echo '{
            "success": true ,
            "message": "New user added" 
        }';
    }
} else {
    echo '{
        "success": false,
        "message": "Incomplete data"  
      }';
}

mysqli_close($conn);
?>