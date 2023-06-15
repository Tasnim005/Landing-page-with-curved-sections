const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  const emailContainer = document.querySelector('input[type="email"]');
  const email = emailContainer.value
  const successMessage = document.querySelector(".success");
  const errorMessage = document.querySelector(".error");
  const continueButton = document.querySelector('.success button')

  if (!email) {
    errorMessage.style.display = "block";
    emailContainer.style.outline = '1px solid hsl(0, 100%, 63%)'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMessage.style.display = "block";
    emailContainer.style.outline = '1px solid hsl(0, 100%, 63%)'
  } else {
    // Email is valid
    successMessage.style.display = "block";
  }

  continueButton.addEventListener('click', reset)

  function reset() {
    location.reload()
  }
}
