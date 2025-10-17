// ------------------------------
// CHANGE NAVBAR ON SCROLL
// ------------------------------
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.style.backgroundColor = 'rgba(125, 75, 58, 0.95)'; // Clay brown
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});
