// JavaScript code for form validation
  document.addEventListener('DOMContentLoaded', function () {
  let form = document.getElementById('myForm');
  let inputField = document.getElementById('inputField');
  let errorMessage = document.createElement('div');
  errorMessage.style.color = 'red';
  errorMessage.style.marginTop = '10px';
  form.appendChild(errorMessage);

  form.addEventListener('submit', function (event) {
    // Regular expression pattern for alphanumeric input
    let alphanumericPattern = /^[a-zA-Z0-9]*$/;
    
    // Retrieve the input field value
    let inputValue = inputField.value;

    // Check if the input value matches the pattern
    if (!alphanumericPattern.test(inputValue)) {
      // Invalid input: display error message
      errorMessage.textContent = 'Please enter alphanumeric characters only: A-Z(a-z), 0-9';
      event.preventDefault();
    } else {
      // Valid input: display confirmation and submit the form
      errorMessage.textContent = '';
      alert('Thank you! Form submitted!');
    }
  });
});