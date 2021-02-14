<?php
require "bddconfig.php";
//récupérer les 3 variables POST
//sécuriser les variables reçues
$paramOK = false;

if(isset($_POST["nom"])) {
    $nom = htmlspecialchars($_POST["nom"]);
    if (isset($_POST["email"])) {
        $email = htmlspecialchars($_POST["email"]);
        if (isset($_POST["message"])) {
            $message = htmlspecialchars($_POST["message"]);
            $paramOK = true;
        }
    }
}
if ($paramOK == true) {

    //INSERT dans la base
        try{
        $objBdd = new PDO ("mysql:host=$bddserver;dbname=$bddname;charset=utf8", $bddlogin, $bddpass);
            $pdoStmt = $objBdd->prepare("INSERT INTO cvmsg (nom, email, message) VALUES(:nom, :email, :message)");
            $pdoStmt ->bindParam(':nom',$nom, PDO::PARAM_STR);
            $pdoStmt ->bindParam(':email',$email, PDO::PARAM_STR);
            $pdoStmt ->bindParam(':message', $message, PDO::PARAM_STR);
            $pdoStmt ->execute();
    
            $lastID = $objBdd->lastInsertId();
            echo $lastID;
    
        } catch (Exception $prmE) {
            die('Erreur : ' . $prmE->getMessage());
        }
    
    //rediriger automatiquement vers la page index
        $serveur = $_SERVER['HTTP_HOST'];
        $chemin = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
        $page = 'index.php';
        header("Location: http://$serveur$chemin/$page");
    
     }else{
         die("Les paramètres reçus ne sont pas valides.");
     }
?> 