// Establish variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var spCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var pwdCharacters = ""

function generatePassword() {
  var pwdLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters."));
  console.log(pwdLength)
    if (isNaN(pwdLength)) {
      window.alert("Invalid entry. Please try again.");
      generatePassword();
    }
    if (pwdLength < 8 || pwdLength > 128) {
      window.alert("Invalid entry. Please try again.");
      generatePassword();
    }
  
  var confirmLower = window.confirm("Would you like your password to contain lower case letters?");
    if (confirmLower) {
      pwdCharacters = pwdCharacters + lowerCase
      console.log(pwdCharacters);
    }

  var confirmUpper = window.confirm("Would you like your password to contain upper case letters?");
    if (confirmUpper) {
      pwdCharacters = pwdCharacters + upperCase
      console.log(pwdCharacters);
    }

  var confirmNumber = window.confirm("Would you like your password to contain numbers?");
    if (confirmNumber) {
      pwdCharacters = pwdCharacters + numbers
      console.log(pwdCharacters);
    }

  var confirmSpChar = window.confirm("Would you like your password to contain special characters?");
    if (confirmSpChar) {
      pwdCharacters = pwdCharacters + spCharacters
      console.log(pwdCharacters);
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);