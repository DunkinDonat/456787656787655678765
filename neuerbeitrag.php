<?php


$link = mysql_connect('localhost', 'root', '');
if (!$link) {
	die('Verbindung schlug fehl: ' . mysql_error());
}

mysql_select_db("gaestebuch",$link)
or die ("Die Datenbank existiert nicht.");


$timestamp = time();
$datum = date("d.m.Y", $timestamp);


mysql_query("
INSERT INTO `gaestedaten`(`name`, `email`, `datum`, `eintrag`)  
VALUES (  '$_POST[Name]','$_POST[EMail]','$datum','$_POST[inhalt]')");

$result = mysql_query("SELECT * FROM `gaestedaten`");
$i = 0;
while($row = mysql_fetch_array($result)){
	$i++;
	echo "Name".$i.";".$row['name'].","." Email".$i.";".$row['email'].","." Datum".$i.";".$row['datum'].","." Eintrag".$i.";".$row['eintrag'].",";
	echo "<br/>";
	
}
echo "AnzahlDaten:".$i;


mysql_close($link);


?>
