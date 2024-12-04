// Dummy credentials for login
const predefinedCredentials = {
    username: "admin",
    password: "admin@123",
  };
  
  // Function to handle login
  document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.createElement("p");
  
    // Remove any previous error messages
    const existingError = document.querySelector(".error-message");
    if (existingError) existingError.remove();
  
    if (!username || !password) {
      errorMessage.textContent = "Both fields are required.";
      errorMessage.className = "error-message";
      document.querySelector(".login-container").appendChild(errorMessage);
      return;
    }
  
    if (username === predefinedCredentials.username && password === predefinedCredentials.password) {
      window.location.href = "main.html"; // Redirect on success
    } else {
      errorMessage.textContent = "Invalid login credentials. Please try again.";
      errorMessage.className = "error-message";
      document.querySelector(".login-container").appendChild(errorMessage);
    }
  });
// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const lockIcon = document.querySelector('.lock-icon');
  
    // Check current type and toggle
    if (passwordField.getAttribute('type') === 'password') {
      passwordField.setAttribute('type', 'text'); // Show password
      lockIcon.textContent = '🔓'; // Change to unlocked icon
    } else {
      passwordField.setAttribute('type', 'password'); // Hide password
      lockIcon.textContent = '🔒'; // Change to locked icon
    }
  }
  