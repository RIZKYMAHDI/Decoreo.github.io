document.addEventListener("DOMContentLoaded", function() {
    // Kode popup yang sudah Anda tulis
    let popup = document.getElementById("quiz-popup");
    let startQuizBtn = document.getElementById("start-quiz-btn");
    let closePopup = document.getElementsByClassName("close-popup")[0];

    startQuizBtn.onclick = function() {
        popup.style.display = "flex";
    }

    closePopup.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});
