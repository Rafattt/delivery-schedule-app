<?php

include('dbusers.php');
$conn = new mysqli($servername, $username, $password, $database);
if (mysqli_connect_errno()){
echo "Failed to connect to MySQL: " . mysqli_connect_error();
die();
}
	$passcode = $_POST["password"];
	$username = $_POST["username"];

		$userpass = $password;
		$result = mysqli_query($conn, "SELECT * FROM users WHERE username='$username' AND passcode='$passcode'");
		while($row = mysqli_fetch_array($result)) {
			$success = true;
			if($success == true) {
				$_SESSION['username']= $username; 
			
				setcookie("username", $row["username"], time()+ (60*15),"/");
				setcookie("password", $row["passcode"], time()+ (60*15),"/");
				setcookie("logged", "1", time()+ (60*15),"/");
				if($row["adminvalue"] == 1){
					setcookie("admin", 1, time()+ (60*15),"/");
				} else {
					setcookie("admin", 0, time()+ (60*15),"/");
				}
	
				header("Location: http://localhost:3000"); //change this line to your website address
			} else {
				
				setcookie("logged", "0", time()+ (60*0.1),"/");
				setcookie("invalid", "Invalid Username or Password. Try Again.", time()+ (60*15),"/");
				header("Location:  http://localhost:3000"); //change this line to your website address
			}
		}
		
	
	
?>