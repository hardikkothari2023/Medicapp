// Dummy credentials for login
const predefinedPassword = "admin@123";

// Function to handle login
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const mobileNumber = document.getElementById('mobile').value;
  const password = document.getElementById('password').value;
  
  if (password === predefinedPassword && mobileNumber === "admin") {
    // Redirect to the main page
    window.location.href = "main.html";
  } else {
    alert("Invalid login credentials. Please try again.");
  }
});
