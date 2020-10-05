// Establish variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var spCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var pwdCharacters = "";

//Function to verify user enters a valid password length
function verifyLength() {
  var pwdLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters."));

    if (isNaN(pwdLength) || pwdLength < 8 || pwdLength > 128) {
      window.alert("Invalid entry. Please try again.");
      return verifyLength();
    } else {
      console.log("Requested password length is " + pwdLength);
      return pwdLength;
    }
}

//Function to prompt user for character types and to generate their random password
function generatePassword() {

  //Bring in user's password length selection from verifyLength() function
  var pwdLength = verifyLength();
  
  //If statements to prompt user for password criteria
  var confirmLower = window.confirm("Would you like your password to contain lower case letters?");
    if (confirmLower) {
      pwdCharacters += lowerCase
      console.log("User would like lower case letters. Current available characters are: " + pwdCharacters);
      window.alert("👍🏼 Lower case letters will be added to your password recipe.");
    } else {
      window.alert("Ok. Lower case letters will be omitted from your password recipe.");
    }

  var confirmUpper = window.confirm("Would you like your password to contain upper case letters?");
    if (confirmUpper) {
      pwdCharacters += upperCase
      console.log("User would like upper case letters. Current available characters are: " + pwdCharacters);
      window.alert("👍🏼 Upper case letters will be added to your password recipe.");
    } else {
      window.alert("Ok. Upper case letters will be omitted from your password recipe.");
    }

  var confirmNumber = window.confirm("Would you like your password to contain numbers?");
    if (confirmNumber) {
      pwdCharacters += numbers
      console.log("User would like numbers. Current available characters are: " + pwdCharacters);
      window.alert("👍🏼 Numbers will be added to your password recipe.");
    } else {
      window.alert("Ok. Numbers will be omitted from your password recipe.");
    }

  var confirmSpChar = window.confirm("Would you like your password to contain special characters?");
    if (confirmSpChar) {
      pwdCharacters += spCharacters
      console.log("User would like special characters. Current available characters are: " + pwdCharacters);
      window.alert("👍🏼 Special characters will be added to your password recipe.");
    } else {
      window.alert("Ok. Special characters will be omitted from your password recipe.");
    }
    
    // If statement to ensure user accepts at least one criteria
    if (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpChar === false) {
      window.alert("You must accept at least one of the available password criteria to generate a password.");
      return generatePassword();
    }
  
  //For loop to iterate across pwdCharacters string and generate password of desired length
  var password = "";
  for (i=0; i < pwdLength; i++) {
    //for each iteration, generate a random number and multiply by # of "available" characters
    var randomChar = Math.floor(Math.random() * pwdCharacters.length);
    password += pwdCharacters.charAt(randomChar);
    console.log("In progress password is: " + password);
  }
  console.log("Full randomly generated password is: " + password);
  return password;
  
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