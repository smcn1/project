<?php
$servername="localhost";
$username="root";
$password="Lip87#q";
$database_name="bellaghygac";

// create connection
$conn=mysqli_connect($servername, $username, $password, $database_name);

// check connection
if (!$conn)
{
    die("Connection Failed:" . mysqli_connect_error());
}

if(isset($_POST['save']))
{
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $num3 = $_POST['num3'];
    $num4 = $_POST['num4'];
    
    $sql_query = "INSERT INTO lotto (name, address, phone, num1, num2, num3, num4)
    VALUES ('$name', '$address', '$phone', '$num1', '$num2', '$num3', '$num4')";
    
    if (mysqli_query($conn, $sql_query))
    {
        echo "New details Entry inserted successfully ! Current date and time is : ";
        
        //store the date and time to the variable
        $myDate = date("d-m-y h:i:s");
        
        //display the date and time
        echo $myDate;
    }
    else
    {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>