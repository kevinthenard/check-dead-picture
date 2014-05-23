<?php
header('Cache-Control: no-cache, must-revalidate');
header('Content-type: application/json');

if (isset($_GET['url'])) {
	$url = $_GET["url"];
}else{
	echo "erreur";
	exit();
}


$handle = curl_init($url);


curl_setopt($handle,  CURLOPT_RETURNTRANSFER, TRUE);

/* Get the HTML or whatever is linked in $url. */
$response = curl_exec($handle);

/* Check for 404 (file not found). */
$httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
if($httpCode == 404) {
    echo "404";
}elseif($httpCode == 200) {
    echo "200";
}else{
	echo $httpCode;
}

curl_close($handle);

?>