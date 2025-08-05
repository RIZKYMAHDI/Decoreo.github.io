const headerNavLinks = document.querySelectorAll('.header-nav a');

headerNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        link.style.color = '#666';
    });
});

const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach((input) => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#4CAF50';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#ccc';
    });
});

const checkoutButton = document.querySelector('.checkout-button');

checkoutButton.addEventListener('click', () => {
    checkoutButton.style.background = '#4CAF50';
    checkoutButton.style.color = '#fff';
});