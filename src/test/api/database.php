<?php
session_start();
  
    $user= $_SESSION['user'];

    if($user == 'admin'){
        echo '{
            "message": "This is a secret message only for admin",
            "success": true
        }';
    } else{
        echo '{
            "message": "Who are you"'.$user.',
            "success": false
        }';
    }
?>