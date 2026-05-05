

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal"); // JavaScript for contact form validation and modal display //



  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) return;

    modal.style.display = "flex";
    form.reset(); // Handle form submission, show modal, and reset form //
  });



  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none"; // Handle modal close on button click or outside click //
    }
  });

 
  const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.style.border = input.validity.valid
        ? "2px solid green"
        : "2px solid red";  // live validation feedback on form fields //
    });
  });
});