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
// Modal functionality
const modal = document.getElementById("buyModal");
const closeBtn = document.querySelector(".close-btn");
const buyButtons = document.querySelectorAll(".buy-btn");
const buyForm = document.getElementById("buyForm");

// Open modal when any buy button is clicked
buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

// Close modal when X is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside modal-content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
buyForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    alert(`Thank you, ${name}!\nWe will contact you at ${email}.\nPayment Method: ${payment}`);
    modal.style.display = "none";
    buyForm.reset();
});
