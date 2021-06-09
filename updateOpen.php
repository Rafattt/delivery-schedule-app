<?php
include('db.php');

$dateFromAJAX = $_POST['delDatevar'];
$dateFromAJAX = str_replace("/", "", $dateFromAJAX);
$dateFromAJAX = json_decode($dateFromAJAX);
$open = $_POST['open'];

$table = 'delivery'. +$dateFromAJAX;



// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE $table SET open='$open' WHERE id='1'";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>