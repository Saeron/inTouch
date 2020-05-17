<?php
session_start();
    if(isset($_SESSION['user'])){
        $user = $_SESSION['user'];
        echo json_encode(
            array(
                'username' => $user
            )
        );
    } else {
        echo '{
            "username": "unknown"
        }';
    }
?>