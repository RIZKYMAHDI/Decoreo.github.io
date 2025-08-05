const pertanyaan = [
    {
        teks1: "Public space",
        teks2: "Personal space",
        img1: "https://i0.wp.com/www.emporioarchitect.com/upload/portofolio/1280/desain-kantor-modern-4-lantai-16180523-89782573180523091315-5.jpg",
        img2: "https://media.licdn.com/dms/image/D4E12AQHzt08LxrnBYg/article-cover_image-shrink_720_1280/0/1710767604436?e=2147483647&v=beta&t=ovWbmRpPVxV0emq6t5yX2YjFsnvjkCjmz4V9oWd3gfU",
        berikutnya: 1
    },
    {
        teks1: "Klasik",
        teks2: "Berani",
        img1: "https://www.juliettesinteriors.co.uk/wp-content/uploads/2022/08/exclusive-modern-precious-stone-dining-table-2.jpeg",
        img2: "https://cdn.shopify.com/s/files/1/0525/8756/1126/t/11/assets/vintage-1692038439789_1000x.jpg?v=1692038440",
        berikutnya: 2
    },
    {
        teks1: "Bright color",
        teks2: "Dark color",
        img1: "https://i.insider.com/604212bb2dc9010018355925?width=700",
        img2: "https://hips.hearstapps.com/housebeautiful/assets/cm/15/04/54c16cccd408d_-_05-hbx-dark-blue-boys-room-1113-s2.jpg",
        berikutnya: 3
    },
    {
        teks1: "Kaca",
        teks2: "Kayu",
        img1: "https://www.sejasa.com/blog/wp-content/uploads/2022/06/11eb8cd3018f0ef112744118dea9f8cb.jpg",
        img2: "https://5.imimg.com/data5/QD/AR/WV/SELLER-91432371/cafe-interior-design.jpg",
        berikutnya: 4
    },
    {
        teks1: "Ramah Anak",
        teks2: "Umum",
        img1: "https://homemydesign.com/wp-content/uploads/2022/01/kids-friendly-interior-integrated-with-outdoor.jpg",
        img2: "https://i.pinimg.com/550x/db/8d/0d/db8d0d8411346b92d70789ec8e9120e9.jpg",
        berikutnya: null
    }
];

let pertanyaanSekarang = 0;

const totalPertanyaan = pertanyaan.length;

function updateProgressBar() {
    const progressBar = document.getElementById('quiz-progress-bar');
    const progress = (pertanyaanSekarang / totalPertanyaan) * 100; 
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
}

window.onload = function() {
    document.getElementById('quiz-progress-bar').style.width = '0%';
    tampilkanPertanyaan();
};

function tampilkanPertanyaan() {
    const soal = pertanyaan[pertanyaanSekarang];
    const kontainerPertanyaan = document.getElementById('kontainer-pertanyaan');

    kontainerPertanyaan.innerHTML = `
        <div class="pilihan" onclick="pilihanDipilih('teks1')">
            <img src="${soal.img1}" alt="${soal.teks1}">
            <div class="teks-pilihan">${soal.teks1}</div>
        </div>
        <div class="pilihan" onclick="pilihanDipilih('teks2')">
            <img src="${soal.img2}" alt="${soal.teks2}">
            <div class="teks-pilihan">${soal.teks2}</div>
        </div>
    `;

    updateProgressBar(); 
}

function pilihanDipilih(teksPilihan) {
    pertanyaanSekarang++;
    
    if (pertanyaanSekarang < totalPertanyaan) {
        tampilkanPertanyaan();
    } 

    else {
        updateProgressBar(); 
        tampilkanTombolHasil();
    }
}

function tampilkanTombolHasil() {
    document.getElementById('kontainer-pertanyaan').style.display = 'none';
    document.getElementById('kontainer-hasil').style.display = 'block';
}
