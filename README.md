# Delivery Schedule

App for menagiging deliveries.
Orginally createn for door wholeseller so default products are 'doors' and 'trims' but that can be change in code.

<img src="http://rafalkmiecik.com/sample.jpg" alt="Delivery Schedule Sample" align="right">


## Installing / Getting started

Copy files into React App.
'localhost' address in files must be change if you  want to use this on website, 'db.php' and 'dbusers.php' must be edited with your database address, login and password.
You need to create 2 MySQL databases:
- empty database for deliveries (PHP code will fill it with data when first delivery will be submited)
- database with users and passwords - it should include at least 3 columns:
#### 'username' with user account name
#### 'passcode' with user password
#### 'admin' with value '0' for standard user and '1' for admin

PHP files should be on the same host as rest of files because login cookies won't work if on different hosts.



## Built With
React, PHP, MySQL

## Dependencies
### react-calendar
### universal-cookie
### jquery


