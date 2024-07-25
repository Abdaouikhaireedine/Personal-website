<?php

$dawbd = new mysqli("localhost", "root", "", "dbresto");
if ($con->connect_error) {
    die(" Can not communicate " . $dawbd->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $laRequete = "INSERT INTO book_tab (name, email, message) VALUES ('$name', '$email', '$message')";
    $resultat = $con->query($laRequete);

    if ($resultat) {
        echo "Data sent successfully!";
    } else {
        echo "An error occurred while sending data" . $dawbd->error;
    }
}

?>