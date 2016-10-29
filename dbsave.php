<?php
require_once("conf.php");
 
 
try {
    $connection = new PDO("mysql:host=$server;dbname=scriptor", $user, $pwd);
    // PDO can throw exceptions rather than Fatal errors, so let's change the error mode to exception
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //http_response_code(200);
    //return $connection;
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
 
 

	try{
 	$statement = $connection->prepare("INSERT INTO projects(name, body) VALUES(:namn, :bodd)");
    //$statement->execute();
    $statement->execute(array( "namn"=>$_REQUEST['name'], "bodd"=> $_REQUEST['body']));
	//http_response_code(200);
	//echo $_REQUEST['name'];
	echo "OK!";
	} catch (PDOException $e){
		if ($e->errorInfo[1] == 1062) {
			die ("du måste hitta på ett annat namn, det där är taget");
		}	  
		echo  $e->getMessage();
	}

/*
function getlist($name){
	$myconn=connect();
	try{
		$statement->$myconn->prepare("Select body from projects where name=".$name);
		$statement->execute();
		$result = $statement -> fetch();
		echo $result["body"];
	}catch(PDOException  $e ){
		echo "Error: ".$e;
	}
}
 */
?>