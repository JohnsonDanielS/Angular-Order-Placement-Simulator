<?php header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
//Please create users database inside phpmysql admin and create userdetails tabel and create id, email and username fields
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "citi";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
if(isset($_POST['OrderID']))
{
    $sql = mysqli_query($conn, "DELETE from orderdetails where OrderID =".$_POST['OrderID']);
    if ($sql) {
        
        $data = array("data" => "Record deleted successfully");
        echo json_encode($data);
      } else {
      
        $data = array("data" =>"Error deleting record: " . mysqli_error($conn));
        echo json_encode($data);
      }
}
die();
?>