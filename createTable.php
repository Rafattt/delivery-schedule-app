<?php
include('db.php');
$cookieFromJs = implode(" ",$_COOKIE);
$cookieFromJs= substr($cookieFromJs, -10);
$cookieFromJs = str_replace("/", "", $cookieFromJs);

$dateFromAJAX = $_POST['delDatevar'];
$dateFromAJAX = str_replace("/", "", $dateFromAJAX);
$dateFromAJAX = json_decode($dateFromAJAX);
$table = 'delivery'. +$dateFromAJAX;
echo $dateFromAJAX;


$conn = new mysqli($servername, $username, $password, $database);


if (mysqli_connect_error()) {
    die("Database connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";



$sql = "CREATE TABLE IF NOT EXISTS " .$table ." (
    id int(11) AUTO_INCREMENT NOT NULL,
    customer_no varchar(255) NOT NULL,
    estimate_no varchar(255) NOT NULL,
    sales_order varchar(255) NOT NULL,
    production varchar(255) NOT NULL,
    amount_of_doors varchar(255) NOT NULL,
    amount_of_trim varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    notes varchar(255) NOT NULL,
    contact varchar(255) NOT NULL,
    time varchar(255) NOT NULL,
    initials varchar(255) NOT NULL,
    confirmation varchar(255) NOT NULL,
    created_by varchar(255) NOT NULL,
    submit_time varchar(255) NOT NULL,
    edited_by varchar(255) NOT NULL,
    edit_time varchar(255) NOT NULL,
    open varchar(255) NOT NULL,
    canceled BOOL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1";

if ($conn->query($sql) === TRUE) {
    echo "Table ".$dateFromAJAX. " created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>