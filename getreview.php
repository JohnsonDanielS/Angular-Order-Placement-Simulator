<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
$servername="localhost";
$username="root";
$password="";
$dbname="citi";
$connection=new mysqli($servername,$username,$password,$dbname);
$add=mysqli_query($connection,"SELECT * FROM merchant");
$rows=array();
while($r=mysqli_fetch_assoc($add))
{
    $rows[]=$r;
}
print json_encode($rows);
die();
?>