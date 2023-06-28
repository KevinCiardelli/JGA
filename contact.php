<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Collect form data
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Set up email parameters
  $to = "ciardelk@bc.edu"; // Replace with the recipient's email address
  $subject = "New form submission";
  $body = "First Name: " . $fname . "\n";
  $body .= "Last Name: " . $lname . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message;

  // Set up additional headers
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>
