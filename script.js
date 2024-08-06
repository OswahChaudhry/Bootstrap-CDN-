// script.js

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');

  // Update button text
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
}

// Add event listener to the toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);