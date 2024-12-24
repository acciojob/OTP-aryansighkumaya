const inputs = document.querySelectorAll('.code');

// Helper function to manage 'focused' class
function updateFocusedClass() {
  inputs.forEach((input) => input.classList.remove('focused')); // Remove 'focused' from all inputs
  if (document.activeElement.classList.contains('code')) {
    document.activeElement.classList.add('focused'); // Add 'focused' to the currently focused input
  }
}

inputs.forEach((input, index) => {
  // Move to the next input on typing
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    updateFocusedClass(); // Update 'focused' class
  });

  // Handle backspace to clear the current field and move focus to the previous input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '' && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = ''; // Clear the previous field
      } else {
        input.value = ''; // Clear the current field
      }
      updateFocusedClass(); // Update 'focused' class
    }
  });

  // Update 'focused' class on focus
  input.addEventListener('focus', updateFocusedClass);
});