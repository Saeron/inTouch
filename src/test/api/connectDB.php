<?php

    define('HOST','localhost');
    define('USER','root');
    define('PASS','1234');
    define('DB','ejemplo');

    function connect_db()
    {
        $connect = mysqli_connect(HOST,USER,PASS,DB);

        if(mysqli_connect_errno($connect)){
            echo mysqli_connect_error();
            exit(0);
        }

        return $connect;
    }

?>
