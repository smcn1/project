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
    
    $numbers = array($num1, $num2, $num3, $num4);
    sort($numbers);
    
    // sends form data to secondary table in database if it is 7pm or after on a draw day (Monday)
    if (date('H') > 18 && date('w') == 1) {
        $table = "lotto2";
    }
    // sends data to primary table
    else {
        $table = "lotto";
    }
    
    // inserts form data into appropriate table and gives user feedback
    $sql_query = "INSERT INTO $table (name, address, phone, num1, num2, num3, num4)
    VALUES ('$name', '$address', '$phone', '$numbers[0]', '$numbers[1]', '$numbers[2]', '$numbers[3]')";
    
    if (mysqli_query($conn, $sql_query))
    {
        if ($table == "lotto") {
            echo "Successfully entered for this weeks draw. Good Luck!";
        }
        else {
            echo "Missed this weeks 7pm deadline. Entered for next weeks draw. Good Luck!";
        }
    }
    else
    {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>