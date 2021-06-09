<?php
include('db.php');

$dateFromAJAX = $_POST['delDatevar'];
$dateFromAJAX = str_replace("/", "", $dateFromAJAX);
$dateFromAJAX = json_decode($dateFromAJAX);
$idFromAJAX = $_POST['id'];
$idFromAJAX = json_decode($idFromAJAX);
$customer_no = $_POST['customer_no'];
$estimate_no = $_POST['estimate_no'];
$sales_order = $_POST['sales_order'];
$production = $_POST['production'];
$amount_of_doors = $_POST['amount_of_doors'];
$amount_of_trim = $_POST['amount_of_trim'];
$address = $_POST['address'];
$notes = $_POST['notes'];
$contact = $_POST['contact'];
$time = $_POST['time'];
$initials = $_POST['initials'];
$confirmation = $_POST['confirmation'];
$created_by = $_POST['created_by'];
$submit_time = $_POST['submit_time'];
$edited_by = $_POST['edited_by'];
$edit_time = $_POST['edit_time'];
$canceled = $_POST['canceled'];

$table = 'delivery'. +$dateFromAJAX;
$id = ''.+ $_POST['id'];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "UPDATE $table SET customer_no='$customer_no', estimate_no='$estimate_no', sales_order='$sales_order', production='$production', amount_of_doors='$amount_of_doors',
 amount_of_trim='$amount_of_trim', address='$address', notes='$notes', contact='$contact', time='$time', initials='$initials', confirmation='$confirmation',
  created_by='$created_by', submit_time='$submit_time', edited_by='$edited_by', edit_time='$edit_time', canceled='$canceled' WHERE id='$id'";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn). $idfromAJAX;
}

mysqli_close($conn);
?>