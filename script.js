// Assignment Code
var generateBtn = document.querySelector("#generate");

function generateBtn() {
  alert("I am an alert box!");


function generatePassword () {
console.log("test")
return ("test")

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
