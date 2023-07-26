<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up the recipient email address
    $to = "ciardelk@bc.edu"; // Replace with your recipient's email address

    // Set up email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    // Email body
    $email_body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Last Name:</strong> $subject</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    ";

    // Send the email
    if (mail($to, "New Contact Form Submission", $email_body, $headers)) {
        // If the email is sent successfully, redirect back to the contact form with a success message
        header("Location: contact.html?status=success");
    } else {
        // If there's an error sending the email, redirect back to the contact form with an error message
        header("Location: contact.html?status=error");
    }
} else {
    // If the form is accessed directly without submitting, redirect back to the contact form
    header("Location: contact.html");
}
?>

