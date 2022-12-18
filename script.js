// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

function generatePassword() {
    var passwordLength = window.prompt("How many characters do you want your password to be? Password must be between 8 and 128 characters.");
    passwordLength = parseInt(passwordLength)
    if (passwordLength > 7 && passwordLength < 129) {
    randomizedPassword(passwordLength)
    } else {
    alert("Please enter a number between 8 and 128!")
    generatePassword();
    }
}

function randomizedPassword(passwordLength) {


}






  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
