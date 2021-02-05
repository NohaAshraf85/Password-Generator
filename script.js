// Assignment Code
var passwordLength = prompt ("Password length, pick a number from 8 to 128")
var upperCaseCharacter = prompt ("Do you want uppercase characters?")
var lowerCaseCharacter = prompt ("Do you want lowercase characters?")
var numeric = prompt ("Do you want a number in your password?")
var specialCharacters = prompt ("Do you want a special character in your password?")



var generateBtn = document.querySelector("#generate");
console.log(generate)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function generatePassword()
// {
//   var characters=[" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890"];
  
//   return "hello";
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


