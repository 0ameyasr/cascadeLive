<!--NOTE: This page is only best viewed using a Apache server (since it is a .php file)
best controlled through XAMPP v3.3.0 Control Panels.-->
<!DOCTYPE html>

<head>
     <!-- basic title, links for the page icon and the local and BootStrap 5.0 scripts and stylesheets-->
    <title>
        Cascade Registration Status
    </title>

    <!--necessary metadata for character set encoding and responsive scales-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--link local icon,stylesheet and script-->
    <link rel="icon" href="..\assets\cascadeIcon3D.png">
    <link rel="stylesheet" href="..\stylesheets\cascadeRegisterSS.css">
    <script src="..\scripts\cascadeRegisterCommitScript.js"></script>

    <!--link Bootstrap 5.0 CDN , stylesheets and scripts-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
</head>

<body>
    
    <?php
        //server, user credentials 
        /*the SQL server is hosted on port 3307, the value 127.0.0.1 is representing the 
          localhost */
        $server = "127.0.0.1:3307";
        /*this is the database that is used to store the email and passwords registered 
          through cascadeRegister.html */
        $database = "cascadeMembers";
        /*this is the username that will log in to the server to commit the 
          proper changes, along with the password. Note that this is a 
          superuser with access to all global previliges in the database*/
        $username = "root";
        $password = "Q5d2qvhx6x1a2b3";

        /*messages used for communication of fetch status */
        $connectionMessage = "";
        $welcomeMessage="";

        /*establish the connection*/
        $connection = mysqli_connect($server,$username,$password,$database);

        /*if the connection fails, terminate the program. */
        if($connection->connect_error){
            die("Connection failed: ".$connection->connect_error);
        }

        /*check if the required credentials have been received by the 
          $_POST superglobals through the form */
        if (isset($_POST['email']) && isset($_POST['passkey'])){

        /*retrieve the data */
        $email = $_POST['email'];
        $passkey = $_POST['passkey'];

        /*query through SQL */
        $sql = "insert into cascadeMembersTable(email,passkey) values('$email','$passkey')";

        /*if the connection has been established and the query has been performed, provide
          the following message(s) according to the case(s). */
        if ($connection->query($sql) === TRUE) {
            echo "<p id='welcomeMessage'> 
                        Successfully connected to cascadeLive, you are now a member!
                  </p>";
        } else {
            echo "<p id='welcomeMessageError'> Registration Unsuccessful. Please try again. Email may already exist.</p>";
        }
        }
        //if there has been some error in the POSTing process, echo failure
        else{echo "<p id='welcomeMessageError'> Server is not responsive, try again later. </p>";}

        //close the connection finally
        $connection->close();
    ?>

    <!--basic html in compliance to cascadeRegister.html-->
    <div class="page-division">
        <div id="register-division">
            <div id="welcome-note-division">
                <p id="welcome-note" style="font-size:50px;color:white;"></p>
            </div>
            <div id="register-panel">

            </div>
        </div>
        <div class="footer-nav">
            <a class="inline-link" href="../pages/cascadeHome.html"><img src="../assets/cascadeAPI.png" height="100%" width="200px"></a>
        </div>
    </div>

</body>

</html>
