document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault();// Prevent form submission
  
    // Validate the name field
    var nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
      displayError(nameInput, 'Please enter your name');
      return;
    }
  
    // Validate the phone number field
    var phoneInput = document.getElementById('phone');
    if (!validatePhoneNumber(phoneInput.value.trim())) {
      displayError(phoneInput, 'Please enter a valid phone number');
      return;
    }
  
    // Validate the email field
    var emailInput = document.getElementById('email');
    if (!validateEmail(emailInput.value.trim())) {
      displayError(emailInput, 'Please enter a valid email address');
      return;
    }
  
    // Validate the message field
    var messageInput = document.getElementById('message');
    if (messageInput.value.trim() === '') {
      displayError(messageInput, 'Please enter a message');
      return;
    }
  
     // Check if at least one checkbox is checked
    var emailCheckbox = document.getElementById('contactMethodEmail');
    var phoneCheckbox = document.getElementById('contactMethodPhone');

    if (!emailCheckbox.checked && !phoneCheckbox.checked) {
        alert('Please choose at least one preferred contact method');
        return;
    }
  
    // If all fields are valid, submit the form
    // You can replace the following line with your own submission logic
    alert('Form submitted successfully!');
    this.reset(); // Reset the form after submission
  });
  
  function displayError(inputElement, errorMessage) {
    var errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.textContent = errorMessage;
  
    var parentElement = inputElement.parentNode;
    parentElement.insertBefore(errorElement, inputElement.nextSibling);
  }
  
  function validatePhoneNumber(phoneNumber) {
    var phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  }
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  