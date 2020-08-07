<?php

    $name = $_POST['name'];
    $visitor_mail = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $select = $_POST['select'];
    $image = $_POST['image'];

    $email_from = "kandhukurivinodreddii@gmail.com";
    $email_subject = "New Form Submission";
    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_mail.\n".
                        "User Phone: $phone.\n".
                            "User Choosen: $select.\n".
                                "User File: $image.\n".
                                    "User Message: $message.\n";
    
    $to = "vinbinreddy@gmail.com";

    $headers = "Form: $email_from \r\n";
    
    $headers = "Reply-T0: $visitor_mail \r\n";
    
    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");

?>