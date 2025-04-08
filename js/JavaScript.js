document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });

const emailInput = document.getElementById('subscribe-email');
const subscribeButton = document.getElementById('subscribe-button');

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() !== "") {
    subscribeButton.disabled = false;
    subscribeButton.classList.add('active');
  } else {
    subscribeButton.disabled = true;
    subscribeButton.classList.remove('active');
  }
});
