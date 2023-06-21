// Javascript to validate that the password and confirm password fields
// match

// On keyup on confirm password validate that the password and confirm password fields match
var inputPassword = document.getElementById("psw");
var confirmPassword = document.getElementById("confirm-psw");

confirmPassword.onkeyup = validatePassword;

// Validate that the password and confirm password fields match
function validatePassword() {
  console.log("validatePassword function called");

  if (inputPassword.value != "" && confirmPassword.value != "") {
    if (inputPassword.value != confirmPassword.value) {
      document.getElementById("confirm-psw").style.borderColor = "#E34234";
      document.getElementById("psw").style.borderColor = "#E34234";
    } else {
      document.getElementById("confirm-psw").style.borderColor = "#2EB82E";
      document.getElementById("psw").style.borderColor = "#2EB82E"; 
    }
  }
} 
