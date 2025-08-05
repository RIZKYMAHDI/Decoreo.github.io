document.addEventListener('DOMContentLoaded', function () {
    // Handle image click to open in modal
    const images = document.querySelectorAll('.image-preview img');
    images.forEach(image => {
        image.addEventListener('click', function () {
            showImageModal(this.src);
        });
    });

    // Function to show image in modal
    function showImageModal(src) {
        const modal = document.createElement('div');
        modal.classList.add('image-modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${src}" alt="Preview" />
            </div>
        `;
        document.body.appendChild(modal);

        // Close modal when clicking close button
        const closeModal = modal.querySelector('.close-modal');
        closeModal.addEventListener('click', function () {
            modal.remove();
        });

        // Close modal when clicking outside the modal content
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
});
