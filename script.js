// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numerical = "0123456789"
var special = "!@#$%^&*?/."

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
  let userChoiceOption = ""
  let confirmUpper = confirm("Would you like uppercase letters?")
  if (confirmUpper === true) {
    userChoiceOption = userChoiceOption.concat(uppercase)
  }
  let confirmLower = confirm("Would you like lowercase letters?")
  if (confirmLower === true) {
    userChoiceOption = userChoiceOption.concat(lowercase)
  }
  let confirmNumerical = confirm("Would you like numbers?")
  if (confirmNumerical === true) {
    userChoiceOption = userChoiceOption.concat(numerical)
  }
  let confirmSpecial = confirm("Would you like special characters?")
  if (confirmSpecial === true) {
    userChoiceOption = userChoiceOption.concat(special)
  }

  let userChoiceArray = userChoiceOption.split("")
  
  let yourpassword = ""

  for(let i = 0; i < passwordLength; i++) {
    let index = Math.floor (Math.random() * userChoiceArray.length)
    let randomchar = userChoiceArray[index]
    yourpassword = yourpassword + randomchar
  }


var passwordText = document.querySelector("#password");

passwordText.value = yourpassword;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
