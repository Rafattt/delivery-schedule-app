# Delivery Schedule

App for menagiging deliveries.
Orginally createn for door wholeseller so default products are 'doors' and 'trims' but that can be change in code.

[DEMO](http://rafalkmiecik.com/deliverybuild/)<br />
Admin login: demoadmin<br />
Standar user login: demouser<br />
Password: demo<br />

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

Admin can edit/cancel existing deliveries and close delivery day to prevent adding additional deliveries.
Delivery details are visible after clicking on existing delivery, you can see there who created it and when least modification has been made.<br />
Example:<br />
Created by user on Wed Jun 09 2021 12:25:14<br />
Last edited by admin on Wed Jun 09 2021 12:32:18<br />

Standard user can only submit new delivery (if delveries for selected day are not closed).



## Built With
React, PHP, MySQL

## Dependencies
### react-calendar
### universal-cookie
### jquery


