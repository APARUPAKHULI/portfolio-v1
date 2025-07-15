<?php
if ($_SERVER["REQUEST_METHOD"]=="POST") {
    $email = $_POST['email'];
    $to= "aparupakhuli11@gmail.com";
    $subject= "New Email subscriber";
    $message= "You got a new subscriber: " .$email;
    $headers="Form: aparupakhuli.com";

    mail($to, $subject, $message, $headers);
    echo"Thank you" ;
}
?>