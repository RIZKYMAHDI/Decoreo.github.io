<?php
session_start();

// Cek apakah pengguna sudah login
if (!isset($_SESSION['user_id'])) {
    header("Location: 2Login.html");
    exit();
}

$user_id = $_SESSION['user_id'];
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "decoreo"; 

// Koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Query untuk mengambil semua proyek pengguna
$sql = "SELECT * FROM projects WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

// Cek apakah pengguna memiliki proyek
if ($result->num_rows > 0) {
    $projects = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $projects = [];
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <link rel="shortcut icon" type="x-icon" href="../Pics/DC.png">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decoreo - Proyek</title>
    <link rel="stylesheet" href="../CSS/bohead.css"> 
    <link rel="stylesheet" href="../CSS/mainProyek1.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css">
</head>
<body> 
    <header class="d-flex justify-content-between align-items-center shadow-sm p-3 mb-4 fixed-top" style="background-color: #ffe6b0;">
        <div class="header-title logo">
            D E C O R E O
        </div>
        <nav class="nav">
            <a class="nav-link" href="9Panduan.html">Panduan</a>
            <a class="nav-link" href="5KuisHasil.html">Kuis Gaya</a>
            <a class="nav-link" href="Desainer.html">Desainer</a>
            <a class="nav-link" href="6-1myproject.php">Proyek</a>
            <a class="nav-link" href="halaman artikel.html">Artikel</a>
            <a class="nav-link" href="8Tentang kami.html">Tentang Kami</a>
        </nav>
    </header>

    <div class="centered-container">
        <div class="project-header">
            <h2>Proyek Saya</h2>
        </div>
    </div>    

    <div class="project-container">
        <?php if (empty($projects)) : ?>
            <div class="placeholder-box">
                <a href="../6buatProyek.html" class="buat-proyek">     
                    <div class="create-project-icon">➕ Proyek Baru</div>
                </a>
            </div>
        <?php else : ?>
            <?php foreach ($projects as $project) : ?>
                <div class="project-box">
                    <img src="https://www.99.co/id/panduan/wp-content/uploads/2023/06/13145514/3.-Desain-Rumah-Minimalis-Modern-Terbaru.jpg" alt="Modern" class="project-image">
                    <div class="designer-container">
                        <div class="designer-box">
                            <div class="designer-info">
                                <h3>Desainer Anda</h3>
                                <p><?= $project['designer_choice'] ?></p>
                            </div>
                            <div class="designer-image-container">
                                <img src="Pics/Aryak.jpg" alt="Desainer" class="designer-image">
                            </div>
                        </div>
                        <a href="7MyProyek.php?id=<?= $project['id'] ?>" class="details-link">Lihat rincian ...</a>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</body>
</html>
