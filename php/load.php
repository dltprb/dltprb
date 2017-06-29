<?php
    $mysqli = mysqli_connect('localhost', 'dltprb12','apfhd112', 'segyu');
    if ($mysqli->connect_error) exit();
    $result = mysqli_query($mysqli, "select * from login");
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    $mysqli->close();
    echo json_encode($rows);
    exit();
?>
 