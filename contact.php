
<!DOCTYPE html>
<html>

<head>
    <title>Contact</title>
    <meta name="description" content="JGA Construction Contact Information">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1" , user-scalable="no" />


</head>
<?php
echo "<pre>";
print_r($_POST);
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
phpinfo();
try {
    // SMTP settings
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPSecure = 'ssl'; // Use 'ssl' if you have SSL enabled
    $mail->Port = 465; // Use 465 for 'ssl'

    // Gmail account credentials
    $mail->Username = 'kevinciardelli02@gmail.com';
    $mail->Password = 'pwycqkhthtandfyj'; // Use your app password if enabled, else use your Gmail account password

    // Email content
    $mail->setFrom($email, $name);
    $mail->addAddress('ciardelk@bc.edu', 'kevin');
    $mail->Subject = 'Test Email';
    $mail->Body = 'This is a test email sent using Gmail SMTP server';

    $mail->send();
    echo 'Email sent successfully!';
} catch (Exception $e) {
    echo 'Error: ' . $mail->ErrorInfo;
}
?>
<body class="contactbody">

    <div class="galleryheader">
        <nav>
            <a href="index.html"><img src="Images/trans.png" class="Home2Logo"></a>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a></li>
                <li><a href="contact.html">CONTACT</a></li>
                <li><a href="gallery.html">GALLERY</a></li>
                <li><a href="reviews.html">TESTIMONIALS</a></li>
            </ul>
        </nav>
    </div>
    <section class="intro">
        <div class="Contact">
            <h1>Contact Information</h1>
        </div>
        <hr>
        <div>
            <section class="contactheader">
                <div class="double_element">
                    <i class="fa fa-envelope" style="font-size:48px"></i>
                    <hr class="hrblock">
                    <a href="mailto:jgaconstruction24@gmail.com" class="fullemail">jgaconstruction24@gmail.com</a>
                </div>
                <div class="double_element">
                    <i class="fa fa-phone" style="font-size:48px"></i>
                    <hr class="hrblock">
                    <a href="tel:6504658337" class="email">650-465-8337</a>
                </div>
                <div class="double_element">
                    <i class="fa fa-map-marker" style="font-size:48px"></i>
                    <hr class="hrblock">
                    <a href="https://www.google.com/maps/place/Redwood+City,+CA+94061/" class="email"
                        target="_blank">Redwood City, CA 94061</a>

                </div>
                <div class="double_element">
                    <i class="fa fa-instagram" style="font-size:48px"></i>
                    <hr class="hrblock">
                    <a href="https://www.instagram.com/jga_construction/" class="email">@JGAConstruction</a>
                </div>
            </section>
        </div>
        <hr>
        <div>
            <section class="form_and_image">
                <div class="send_left">
                    <h2>Send Us A Message</h2>
                    <form action="contact.php" method="POST" name="emailContact">
                        <div>
                            <input type="text" id="name" name="name" placeholder="First Name" class="sizing">
                        </div>
                        <div>

                            <input type="text" id="subject" name="subject" placeholder="Last Name" class="sizing">
                        </div>
                        <div>

                            <input type="email" id="email" name="email" placeholder="Your Email" required
                                class="sizing">
                        </div>
                        <div>

                            <textarea id="message" name="message" placeholder="Your Message" required
                                class="sizingBio"></textarea>
                        </div>
                        <div>
                            <input type="submit" name="send" value="Submit">
                        </div>
                        </form>
                        </div>
                <img src="Images/Kitchen.jpg" class="contactimage">
        </div>
    </section>
</body>
<footer class="footer">
    <div>
        <img src="Images/InvertedLogo.jpg" class="footerimage">
    </div>
    <div class="footerbox"></div>
    <div class="footertext">
        <div class="contactinfo">
            <p>Justin Angstadt (Owner)<br>
                Lic#1047409<br>
                Redwood City, CA, 94061</p>
            <div class="footerbox2"></div>
            <p>
                650-465-8337<br>
                jgaconstruction24@gmail.com<br>
            </p>
        </div>
    </div>
</footer>

</html>