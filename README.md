# Angular-Order-Placement-Simulator
Angular App to simulate(not do actual) payment and simulate placement of an order using database. Here the merchant ID is entered to check the rating of the merchant and then decision is taken whether to proceed with the payment or not.
After the order is placed successfully, an order ID is created and then the rating can be given to the merchant once the order is delivered.(Rating can be only once for an order)

Pre-requisite softwares:
1. Angular 
2. Xampp 

Steps to run the code:
1. Download the source code and run the angular app using ngserve in the folder in which the source code is placed.
2. Place all the php files in a new Folder named "payment" in the directory: "C:\xampp\htdocs"
3. Start the xampp control panel and start "Apache" and "MySql"(If you have mysql already in your local system, change the port number of xampp mysql.
(Changing the port number of xampp MySql:
step 1: stop the xampp server, if it is already running.(to avoid collapse)
step 2: run your notepad as administrator and open this 3 files:
1) xampp/properties.ini
2) xampp/mysql/bin/my.ini
3) xampp/php/php.ini
step 3: Press ctrl+F and replace all 3306 ( port number ) with 3308(it can be anything like 3307 or 3309) .( Use ctrl+F so that you don’t miss out any 3306 port unchanged. Otherwise it won’t work)
step 4 : save all the files.
step 5 : Now restart your apache and mysql.
Source: https://www.quora.com/How-do-I-change-the-port-of-a-MySQL-server-in-XAMPP answer by Neha)
4. Navigate to http://localhost/phpmyadmin/ and create a database named "citi" and within it create two tables "merchant"(to store merchant ratings) and "orderdetails"(to store orders)
(SQL Queries:
CREATE TABLE merchant(ID INT NOT NULL,Rating FLOAT NOT NULL,Count INT NOT NULL,PRIMARY KEY(ID));
CREATE TABLE orderdetails(OrderID INT NOT NULL AUTO_INCREMENT,MerchantID INT NOT NULL,Amount FLOAT,PRIMARY KEY(OrderID));
)
5. Open the port in which angular app(Default: http://localhost:4200/) is running and voila!! there's a fully functional payment simulator.
