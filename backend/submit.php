<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// // Handle preflight OPTIONS request
// if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//     exit(0);
// }

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$postData = file_get_contents("php://input");
$data = json_encode($postData, true); // Corrected to json_decode

if (is_null($data)) {
    echo json_encode(["message" => "No data received"]);
    exit; // Exit if no data is received
}

$name = isset($data['name']) ;
$email = isset($data['email']) ;
$message = isset($data['message']) ;

if (is_null($name) || is_null($email) || is_null($message)) {
    print_r(json_encode(["message" => "Invalid data received"]));
    exit; // Exit if any required data is missing
}

// Insert data into the database
$insert = "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";
echo $insert;

if ($conn->query($insert) === TRUE) {
    echo json_encode(["message" => "Data inserted successfully"]);
} else {
    echo json_encode(["message" => "Error: " . $conn->error]);
}

$conn->close();
?>
