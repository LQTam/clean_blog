<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php 
    $conn = mysqli_connect("localhost","root","","blog");
    $sql = "SELECT * FROM blog_users";
    $result = mysqli_query($conn,$sql);
    $json_arr = array();

    while($row = mysqli_fetch_assoc($result)){
        $json_arr[] = $row;
    }

    echo "<pre>";
    print_r($json_arr);
    echo "</pre>";
?>
    
</body>
</html>