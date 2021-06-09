<?php
include('db.php');

$dateFromAJAX = $_POST['delDatevar'];
$dateFromAJAX = str_replace("/", "", $dateFromAJAX);
$dateFromAJAX = json_decode($dateFromAJAX);
$idFromAJAX = $_POST['id'];
$idFromAJAX = json_decode($idFromAJAX);


$table = 'delivery'. +$dateFromAJAX;
$id = ''.+ $_POST['id'];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "DELETE FROM $table WHERE id=$id";

if (mysqli_query($conn, $sql)) {
    echo "Delivery deleted";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn). $idfromAJAX;
}

mysqli_close($conn);
?>