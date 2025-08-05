<?php
session_start();

// Koneksi ke database
$servername = "localhost";  
$username = "root";         
$password = "";             
$dbname = "decoreo";      

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query untuk mencari user berdasarkan email
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verifikasi password
        if (password_verify($password, $user['password'])) {
            // Menyimpan user_id ke session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['email'] = $user['email'];

            // Redirect ke halaman yang sesuai setelah login
            header("Location: ../3Kuis1.html");
            exit();
        } else {
            // Password salah, kembalikan ke halaman home
            echo "<script>alert('Password salah!'); window.location.href = '../1Home.html';</script>";
        }
    } else {
        // Email tidak ditemukan, kembalikan ke halaman home
        echo "<script>alert('Email tidak ditemukan!'); window.location.href = '../1Home.html';</script>";
    }
}

$conn->close();
?>
