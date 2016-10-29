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
 	$statement = $connection->prepare("SELECT name FROM projects");
    $statement->execute();
   $results=$statement->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($results);
	//echo $_REQUEST['name'];
	 
	} catch (PDOException $e){
		//http_response_code(500);
		echo $e->getMessage();
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