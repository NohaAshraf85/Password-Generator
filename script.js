// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts to chose the password criteria
 var charactersArray = "abcdefghijklmnopqrstuvwxyz";
  var numericArray = "0123456789";
  var specialCharactersArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characterArraysChosenbyUser="";
function generatePassword(){
  
  do
  {
   var passwordLength = prompt ("Password length, pick a number from 8 to 128")
  }
  while(!(passwordLength>8 && passwordLength<128));
  var upperCaseCharacter = confirm ("Do you want uppercase characters? Yes/No")
  var lowerCaseCharacter = confirm ("Do you want lowercase characters? Yes/No")
  var numeric = confirm ("Do you want a number in your password? Yes/No")
  var specialCharacters = confirm ("Do you want a special character in your password? Yes/No")
if(upperCaseCharacter ==true)
{
  characterArraysChosenbyUser=characterArraysChosenbyUser + upperCaseArray;

}
if(lowerCaseCharacter ==true)
{
  characterArraysChosenbyUser= characterArraysChosenbyUser +  charactersArray;

}
if(numeric==true)
{
  characterArraysChosenbyUser = characterArraysChosenbyUser + numericArray;

}
if(specialCharacters==true)
{
  characterArraysChosenbyUser=characterArraysChosenbyUser + specialCharactersArray;

}
  // console logging the above variables
  console.log(passwordLength);
  console.log(upperCaseCharacter);
  console.log(lowerCaseCharacter);
  console.log(numeric);
  console.log(specialCharacters);

  var generatedPassword="";
  // list of arrays for the password criteria
 //Validation

  Math.floor (Math.random() * 15) + 10;

  for (var i=0; i < passwordLength; i++){
    generatedPassword = generatedPassword + generateRandomCharacter();

  }
  return generatedPassword;

}
function generateRandomCharacter()
{
 var index= Math.floor(Math.random()*characterArraysChosenbyUser.length);
  return characterArraysChosenbyUser[index];
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
