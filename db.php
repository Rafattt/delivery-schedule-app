<?php
 
$servername = 'database address';
$username = 'username';
$password = 'password';
$database = 'database name';
$conn = new mysqli($servername, $username, $password, $database);
    if (mysqli_connect_errno()){
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 die();
 }
 $dateFromAJAX = $_POST['delDatevar'];
 $dateFromAJAX = str_replace("/", "", $dateFromAJAX);
 $dateFromAJAX = json_decode($dateFromAJAX);
 $table = 'delivery'. +$dateFromAJAX;
 ?>