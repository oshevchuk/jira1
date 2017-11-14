<?php
header('Access-Control-Allow-Origin: *');

$base64_usrpwd = base64_encode($_POST['user'].':'.$_POST['pass']);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://localhost:8080/rest/api/2/issue/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json',
    'Authorization: Basic '.$base64_usrpwd));

echo $_POST["projectName"];

//$arr['project'] = array( 'key' => 'TEST');
$arr['project'] = array( 'key' => $_POST["projectName"]);
$arr['summary'] = $_POST['summary'];
$arr['description'] = $_POST['description'];
$arr['issuetype'] = array( 'name' => $_POST['type']);

$json_arr['fields'] = $arr;

$json_string = json_encode ($json_arr);
curl_setopt($ch, CURLOPT_POSTFIELDS,$json_string);
$result = curl_exec($ch);
curl_close($ch);

echo $result;
