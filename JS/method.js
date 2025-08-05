document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    let popup = document.getElementById("quiz-popup");
    let submitButton = document.getElementById("submit-button");
    let closePopup = document.getElementsByClassName("close-popup")[0];
    let printReceiptButton = document.getElementById("print-receipt");

    // Show the pop-up when "Bayar" button is clicked
    submitButton.onclick = function() {
        popup.style.display = "flex"; // Show pop-up
    }

    // Close the pop-up when "x" is clicked
    closePopup.onclick = function() {
        popup.style.display = "none"; // Hide pop-up
    }

    // Close pop-up when clicking outside of the content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    // Redirect to "Bukti Bayar.html" when the "Cetak Bukti Bayar" button is clicked
    printReceiptButton.onclick = function() {
        window.location.href = "Bukti Bayar.html"; // Redirect to Bukti Bayar.html
    }
});
