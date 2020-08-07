<?php

    $name = $_POST['name'];
    $visitor_mail = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $select = $_POST['services'];
    // $image = $_POST['image'];
    $email_subject = "New Form Submission";
    $email_body = "User Name: ".$name."\n";
    $email_body .= "User Email: ".$visitor_mail."\n";
    $email_body .= "User Phone: ".$phone."\n";
    $email_body .= "User Choosen: ".$select."\n";
    // $email_body .= "User File: ".$image."\n" ;
    $email_body .= "User Message: ".$message."\n";

    // $to = "vinbinreddy@gmail.com";
    $to = "vinbinreddy@gmail.com";

    // $header = "MIME-Version: 1.0\r\n";
    // $header .= "Content-type: text/html\r\n";
    
    mail($to, $email_subject, $email_body);

?>