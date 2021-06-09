<?php
header('Content-Type:application/json');
if (isset($_GET['table']) && $_GET['table']!="") {
	include('db.php');
	$conn = new mysqli($servername, $username, $password, $database);
	$dbdata = array();
	$id = $_GET['table'];
	$result = mysqli_query(
	$conn,
    "SELECT * FROM {$_GET['table']}");
	if(mysqli_num_rows($result)>0){
	while($row = mysqli_fetch_array($result)){
$dbdata[]=$row;

	$id = $row['id'];
	$customer_no = $row['customer_no'];
	$estimate_no = $row['estimate_no'];
	$sales_order = $row['sales_order'];
	$production = $row['production'];
	$amount_of_doors = $row['amount_of_doors'];
	$amount_of_trim = $row['amount_of_trim'];
	$address = $row['address'];
	$notes = $row['notes'];
	$contact = $row['contact'];
	$time = $row['time'];
	$initials = $row['initials'];
	$confirmation = $row['confirmation'];
	$created_by = $row['created_by'];
	$submit_time = $row['submit_time'];
	$edited_by = $row['edited_by'];
	$edit_time = $row['edit_time'];
	$open = $row['open'];
	$canceled = $row['canceled'];
	response($id, $customer_no, $estimate_no, $sales_order, $production, $amount_of_doors, $amount_of_trim, $address, $notes, $contact, $time, $initials, $confirmation,
	 $created_by, $submit_time, $edited_by, $edit_time, $open, $canceled);

};echo json_encode($dbdata);
	
	}else{
		response(NULL, NULL, 200,"No Record Found");
		}
}else{
	response(NULL, NULL, 400,"Invalid Request");
	}

function response($id, $customer_no, $estimate_no, $sales_order, $production, $amount_of_doors, $amount_of_trim, $address, $notes, $contact, $time, $initials, $confirmation,
 $created_by, $submit_time, $edited_by, $edit_time, $open, $canceled){
	$response['id'] = $id;
	$response['customer_no'] = $customer_no;
	$response['estimate_no'] = $estimate_no;
	$response['sales_order'] = $sales_order;
	$response['production'] = $production;
	$response['amount_of_doors'] = $amount_of_doors;
	$response['amount_of_trim'] = $amount_of_trim;
	$response['address'] = $address;
	$response['notes'] = $notes;
	$response['contact'] = $contact;
	$response['time'] = $time;
	$response['initials'] = $initials;
	$response['confirmation'] = $confirmation;
	$response['created_by'] = $created_by;
	$response['submit_time'] = $submit_time;
	$response['edited_by'] = $edited_by;
	$response['edit_time'] = $edit_time;
	$response['open'] = $open;
	$response['canceled'] = $canceled;

	
	$json_response = json_encode($response);
	

}
?>