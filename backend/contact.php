<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$postData = json_decode(file_get_contents("php://input"), true);
$name = $postData['name'];
$email = $postData['email'];
$subject = $postData['subject'];
$message = $postData['message'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo json_encode(["message" => "Contact saved successfully"]);
} else {
    echo json_encode(["message" => "Error saving contact"]);
}

$stmt->close();
$conn->close();
?>
