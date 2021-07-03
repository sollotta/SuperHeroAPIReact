<?php
$secret_key = "9865341565";
if (isset($_REQUEST['file'])){
    $content =file_get_contents($_REQUEST['file']);
    } else {
        $content = file_get_contents('https://www.superheroapi.com/api/&secret_key=');
            }
        if($content !== false && $_REQUEST['secret_key'] == $secret_key) {
            echo $content;
        } else {
            echo "ERROR!";
        }

?>