<?php

?>

<!DOCTYPE HTML>
<!--       Developed by @RobertDaleSmith founder of @MoteLabs.           
           ____    ___  @FlingerCo / robert@motelabs.com                                                       
          /\  _`\ /\_ \    __                                                             
          \ \ \L\_\//\ \  /\_\    ___      __      __   _ __      ___    ___   
           \ \  _\/ \ \ \ \/\ \ /' _ `\  /'_ `\  /'__`\/\`'__\   /'___\ / __`\ 
            \ \ \/   \_\ \_\ \ \/\ \/\ \/\ \L\ \/\  __/\ \ \/ __/\ \__//\ \L\ \
             \ \_\   /\____\\ \_\ \_\ \_\ \____ \ \____\\ \_\/\_\ \____\ \____/
              \/_/   \/____/ \/_/\/_/\/_/\/___L\ \/____/ \/_/\/_/\/____/\/___/ 
                                           /\____/                             
                                           \_/__/                  (C)(TM)2013
-->

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Flinger.co - Thanks for Advertising with Us</title>

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="title" 		  content="Flinger.co - Thanks for Advertising with Us" />
        <meta name="copyright" 	  content="MoteLabs.com - 2013" />
        <meta name="email" 		  content="robert@motelabs.com" />
        <meta name="description" content="Advertise on Flinger! Display ads on the remote app while your commercial plays on the viewer. Speak to us to find out more about how you can participate in the synchronized ads system on Flinger so you can reach viewers on multiple screens at once. Second screen engadgement will create an increased click-through rate to your business, product, service, or cause." />
        <meta name="viewport" content="width=320, width=device-width, initial-scale=1, maximum-scale=1" /> <!-- This will force the device viewport to maintain the correct scale -->
        <meta name="apple-mobile-web-app-capable" content="yes" /> <!-- This will remove the Safari web browsers address bar & bookmarks bar giving your web page a native appearance -->

        <link href="/css/style_pages.css" media="all" rel="stylesheet" type="text/css" />
        
        <!-- Opera Speed Dial Favicon -->
        <link rel="icon" type="image/png" href="https://flinger.motelabs.com/fav-icon-32.png" />
        <!-- Standard Favicon -->
        <link rel="icon" type="image/x-icon" href="https://flinger.motelabs.com/favicon.ico" />
        <!-- For iPhone 4 Retina display: -->
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://flinger.motelabs.com/apple-touch-icon-114x114-precomposed.png">
        <!-- For iPad: -->
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://flinger.motelabs.com/apple-touch-icon-72x72-precomposed.png">
        <!-- For iPhone: -->
        <link rel="apple-touch-icon-precomposed" href="https://flinger.motelabs.com/apple-touch-icon-57x57-precomposed.png">
        
        <meta property="fb:app_id" content="271277383008651" />
        <meta property="fb:admins" content="537257174" />  
        <meta property="og:title" content="Flinger.co - Thanks for Advertising with Us" />
        <meta property="og:url" content="https://flinger.motelabs.com/advertise-on-flinger/thank-you/" >
        <meta property="og:site_name" content="Flinger.co" />
        <meta property="og:description" content="Advertise on Flinger! Display ads on the remote app while your commercial plays on the viewer. Speak to us to find out more about how you can participate in the synchronized ads system on Flinger so you can reach viewers on multiple screens at once. Second screen engadgement will create an increased click-through rate to your business, product, service, or cause." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://flinger.motelabs.com/icon_512.png" />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

        <script type="text/javascript" src="//flinger.motelabs.com/js/jquery.js"></script>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-39500794-5', 'flinger.co');
          ga('send', 'pageview');

        </script>

    </head>
    <body id="body_wrapper">

        <?php require '../../pages_header.php' ?>

        <script>
            $('#header_link_advert').css("color","#f4f4f4");
            $('#side_bar_page_title').html("ADVERTISE");
        </script>

        <div id="main_body_container">
            <div id="side_bar_container">
                <div id="side_bar_page_title">ADVERTISE</div>

                <div id="side_bar_dot_co_proud">
                    <script type="text/javascript" src="//s3.amazonaws.com/opportunityco/proud/proud.js"></script><script>COBadge.aff="btknp3";COBadge.show();</script>
                </div>
            </div>
            <div id="main_content_container">
                <div class="blog_post">
                    <br>
                    <div class="blog_post_title">We Can't Wait To Speak To You!</div>
                    <div class="blog_post_body">                        
                        <?php
                            if(isset($_POST['email'])) {
     
                                // EDIT THE 2 LINES BELOW AS REQUIRED
                                $email_to = "robert@motelabs.com";
                                $email_subject = "Advertise on Flinger Request";
     
     
                                function died($error) {
                                    // your error code can go here
                                    echo "We are very sorry, but there were error(s) found with the form you submitted. ";
                                    echo "These errors appear below.<br /><br />";
                                    echo $error."<br /><br />";
                                    echo "Please go back and fix these errors.<br /><br />";

                                    //$elem = $doc->getElementsById('advertise_container');
                                    //$elem->innerHTML = 'We are very sorry, but there were error(s) found with the form you submitted. ';

                                    //die();
                                }
     
                                // validation expected data exists
                                if(!isset($_POST['full_name']) ||
                                    !isset($_POST['company']) ||
                                    !isset($_POST['email']) ||
                                    !isset($_POST['telephone']) ||
                                    !isset($_POST['comments'])) {
                                    died('We are sorry, but there appears to be a problem with the form you submitted.');       
                                }
     
                                $full_name = $_POST['full_name']; // required
                                $company = $_POST['company']; // required
                                $email_from = $_POST['email']; // required
                                $telephone = $_POST['telephone']; // not required
                                $comments = $_POST['comments']; // required
     
                                $error_message = "";
                                $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
                                if(!preg_match($email_exp,$email_from)) {
                                $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
                                }
                                $string_exp = "/^[A-Za-z .'-]+$/";
                                if(!preg_match($string_exp,$full_name)) {
                                $error_message .= 'The First Name you entered does not appear to be valid.<br />';
                                }
                                if(!preg_match($string_exp,$company)) {
                                $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
                                }
                                //if(strlen($comments) < 2) {
                                //  $error_message .= 'The Comments you entered do not appear to be valid.<br />';
                                //}
                                if(strlen($error_message) > 0) {
                                died($error_message);
                                }
                                else{
      
                                    echo "Thank you for contacting us. We will be in touch with you very soon.";
                                }
                                $email_message = "Form details below.\n\n";
     
                                function clean_string($string) {
                                    $bad = array("content-type","bcc:","to:","cc:","href");
                                    return str_replace($bad,"",$string);
                                }
     
                                $email_message .= "First Name: ".clean_string($full_name)."\n";
                                $email_message .= "Last Name: ".clean_string($company)."\n";
                                $email_message .= "Email: ".clean_string($email_from)."\n";
                                $email_message .= "Telephone: ".clean_string($telephone)."\n";
                                $email_message .= "Comments: ".clean_string($comments)."\n";
     
     
                            // create email headers
                            $headers = 'From: '.$email_from."\r\n".
                            'Reply-To: '.$email_from."\r\n" .
                            'X-Mailer: PHP/' . phpversion();
                            @mail($email_to, $email_subject, $email_message, $headers);  }
                        ?> 
                        <!-- include your own success html here -->
                        
                    </div>
                </div>                
            </div>
        </div>
        <?php require '../../pages_footer.php' ?>
        
    </body>
</html>
