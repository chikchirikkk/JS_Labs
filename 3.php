<?php
$name=$_GET["name"];
$email=$_GET["email"];
$rev=$_GET["rev"];

$json = json_decode(file_get_contents("2.json", JSON_UNESCAPED_UNICODE), true);

$json['review'][] = [
  'name' => $name,
  'email' => $email,
  'rev' => $rev,
];

file_put_contents('2.json', json_encode($json, JSON_UNESCAPED_UNICODE));

$jsonString = file_get_contents("2.json");
$rrow = json_decode($jsonString);
$schiotchik=0;
        $count = count($rrow->review);
        foreach ($rrow->review as $number => $item) {
            $schiotchik++;
            $name = $item->name;
            $email = $item->email;
            $rev = $item->rev;
            echo "<div style='width: 400px; background-color: pink; padding:10px; margin-top: 5px;' >";
            echo '<span>Имя: </span>'.$name.'<br><span>email: </span>'.$email.'<br><span>Отзыв: </span>'.$rev.'<br>';  
            echo "</div>";
            if($schiotchik==$count)break;
        }

?>