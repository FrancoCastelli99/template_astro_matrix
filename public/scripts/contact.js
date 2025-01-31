// public/scripts/contact.js
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Sending message...";
    setTimeout(() => {
        formStatus.textContent = "Message sent! 🚀";
        contactForm.reset();
    }, 2000);
});