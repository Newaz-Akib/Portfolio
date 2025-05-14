document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = " Thank you for message.I will reply back to you soon!";
  this.reset();
});