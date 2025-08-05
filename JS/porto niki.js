const headerNavLinks = document.querySelectorAll('.header-nav a');

headerNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        link.style.color = '#666';
    });
});

const collaborationButton = document.querySelector('.collaboration-button');

collaborationButton.addEventListener('click', () => {
    collaborationButton.style.background = '#b3b28e';
});

const buttonContainerButton = document.querySelector('.button-container button[type="submit"]');

buttonContainerButton.addEventListener('click', () => {
    buttonContainerButton.style.background = '#4e5669';
});