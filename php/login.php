<?php
    $mysqli = mysqli_connect('localhost', 'dltprb12','apfhd112', 'segyu');
    if ($mysqli->connect_error) exit();
    $result = mysqli_query($mysqli, "
    select * from login
    where id = '".$_POST['id']."' 
    and pass = '".$_POST['pw']."'");
    if(mysqli_num_rows($result) === 0) echo 'fail';
    else echo "ok";
    exit();
?>
 