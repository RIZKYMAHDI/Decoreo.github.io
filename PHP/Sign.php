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
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if ($password != $confirm_password) {
        echo "<script>alert('Kata sandi tidak cocok!');</script>";
    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Insert user baru ke database
        $stmt = $conn->prepare("INSERT INTO users (email, phone_number, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $email, $phone, $hashed_password);

        if ($stmt->execute()) {
            // Menyimpan session user_id setelah signup sukses
            $_SESSION['user_id'] = $conn->insert_id; // Menggunakan insert_id untuk mendapatkan ID user yang baru dibuat

            echo "<script>alert('Akun berhasil dibuat!'); window.location.href = '../6Proyek.html';</script>";
        } else {
            echo "<script>alert('Terjadi kesalahan. Coba lagi.');</script>";
        }

        $stmt->close();
    }
}

$conn->close();
?>
