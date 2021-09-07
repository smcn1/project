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

$day=date('w');
$hour=date('H');

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
        echo day + hour;
        //echo "New details Entry inserted successfully!<br>";
        
        //gets day of week as number(0=sunday, 1=monday..., 6=saturday)
        //date('w');
        //note: returns 0 through to 6 but as string so to check what day do this
        if(date('w') == 1){
            echo "its Monday!!!";
        }
        else{
            echo date("D M j G:i:s T Y")."<br>";
        }
        
        //store the date and time to the variable
        //$myDate = date("d-m-y h:i:s");
        
        //display the date and time
        //echo $myDate;
    }
    else
    {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>