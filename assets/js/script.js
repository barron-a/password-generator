// Establish variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var spCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var pwdOptions = ""

// Greeting and verify user would like to generate a new password
var newPassword = window.confirm("Welcome to Barron's Secure Password Generator! Would you like to generate a new password?");

var generatePassword = function() {
  if (newPassword) {
    var pwdLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters."));
    console.log(pwdLength)
  } else {
    window.alert("Thanks for stopping by - come again soon!")
  }
};

pwdCriteria()

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