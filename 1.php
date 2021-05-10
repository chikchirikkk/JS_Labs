<?php
$tek=$_GET["tek"];
$jsonString = file_get_contents("1.json");
$rrow = json_decode($jsonString);
$c=0;
foreach ($rrow->news->new as $number => $item) {
    $c++;
    $tit = $item->tit;
    $text = $item->text;
    $img = $item->img;
    echo "<div style='width: 400px; height: 500px; background-color: pink; padding:10px; margin-top: 5px;' >";
    echo '<br><p style="font-weight: bold; font-size: 30px">'.$tit.'</p>'.$text.'<br><img src="'.$img.'" width=400px><br>';  
    echo "</div>";
    if($c==$tek)break;
}
?>