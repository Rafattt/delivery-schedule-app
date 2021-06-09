<?php
include('db.php');

$dateFromAJAX = $_POST['delDatevar'];
$dateFromAJAX = str_replace("/", "", $dateFromAJAX);
$dateFromAJAX = json_decode($dateFromAJAX);
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
$edit_time = $_POST['edit_time'];
$edited_by = $_POST['edited_by'];
$open = $_POST['open'];
$canceled = $_POST['canceled'];

$table = 'delivery'. +$dateFromAJAX;

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO $table (customer_no, estimate_no, sales_order, production, amount_of_doors, amount_of_trim, address, notes, contact, time, initials, confirmation, created_by, submit_time, edit_time, edited_by, open, canceled)
VALUES ('$customer_no', '$estimate_no', '$sales_order', '$production', '$amount_of_doors', '$amount_of_trim', '$address', '$notes', '$contact', '$time', '$initials',
 '$confirmation', '$created_by', '$submit_time', '$edit_time', '$edited_by', '$open', '$canceled')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>