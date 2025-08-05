const galeri = document.querySelector('.gallery');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const itemGaleri = document.querySelectorAll('.gallery-item');

    itemGaleri.forEach((item, index) => {
        const offset = Math.sin((scrollY + index * 100) * 0.01) * 20; 
        item.style.transform = `translateY(${offset}px)`;
        item.style.transition = "transform 0.2s ease-out";
    });

    if (scrollY + windowHeight >= documentHeight) {
        itemGaleri.forEach(item => {
            item.style.transform = 'translateY(0)'; 
        });
    }

    if (scrollY === 0) {
        itemGaleri.forEach(item => {
            item.style.transform = 'translateY(0)';
        });
    }
});

let kontenSekarang = 0;
const konten = document.querySelectorAll('.content');

function tampilkanKonten(index) {
    konten.forEach((content, i) => {
        content.classList.remove('active');
        if (i === index) {
            content.classList.add('active');
        }
    });
}

document.getElementById('next').addEventListener('click', function() {
    tampilkanKonten(1);
});

document.getElementById('prev').addEventListener('click', function() {
    tampilkanKonten(0);
});
