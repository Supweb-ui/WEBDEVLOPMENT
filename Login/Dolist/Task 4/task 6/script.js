(function () {
  // Elements
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const msgInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const msgError = document.getElementById('messageError');
  const formMessage = document.getElementById('formMessage');

  // Validation functions
  function validateName() {
    const v = nameInput.value.trim();
    if (!v) { showError(nameError, 'Name is required.'); return false; }
    if (v.length < 2) { showError(nameError, 'Please enter at least 2 characters.'); return false; }
    clearError(nameError); return true;
  }

  function validateEmail() {
    const v = emailInput.value.trim();
    if (!v) { showError(emailError, 'Email is required.'); return false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(v)) { showError(emailError, 'Please enter a valid email address.'); return false; }
    clearError(emailError); return true;
  }

  function validateMessage() {
    const v = msgInput.value.trim();
    if (!v) { showError(msgError, 'Message is required.'); return false; }
    if (v.length < 10) { showError(msgError, 'Message should be at least 10 characters.'); return false; }
    clearError(msgError); return true;
  }

  // Error helpers
  function showError(el, msg) { el.textContent = msg; }
  function clearError(el) { el.textContent = ''; }

  // Live validation
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  msgInput.addEventListener('input', validateMessage);

  // Submit handler
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    formMessage.style.display = 'none';

    const isName = validateName();
    const isEmail = validateEmail();
    const isMsg = validateMessage();

    if (isName && isEmail && isMsg) {
      const data = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: msgInput.value.trim()
      };

      formMessage.textContent = 'Thanks! Your message looks good — (no actual sending in this demo).';
      formMessage.style.display = 'block';

      console.log('Validated form data:', data);

      form.reset();
      nameInput.focus();
      setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
    } else {
      if (!isName) nameInput.focus();
      else if (!isEmail) emailInput.focus();
      else msgInput.focus();
    }
  });
})();