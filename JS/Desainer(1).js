
document.querySelectorAll('.portfolio-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 

        const href = event.target.getAttribute('href');

      
        event.target.style.transition = 'opacity 0.5s ease';
        event.target.style.opacity = '0.5';

       
        setTimeout(() => {
            window.location.href = href;
        }, 500); 
    });
});
