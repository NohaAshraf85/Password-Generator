// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password criteria arrays
  var charactersArray = "abcdefghijklmnopqrstuvwxyz";
  var numericArray = "0123456789";
  var specialCharactersArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var characterArraysChosenbyUser="";

  // Function and prompts to generate the password

  function generatePassword(){
  
  
   var passwordLength = prompt ("Password length, pick a number from 8 to 128");
   if ((passwordLength >= 8 && passwordLength < 128) === false){

    alert("Please enter the correct password length, choose a number not less than 8 or more than 128");
    return "";
   }
  
  var upperCaseCharacter = confirm ("Include Uppercase?");
  var lowerCaseCharacter = confirm ("Include Lowercase?");
  var numeric = confirm ("Include a number?");
  var specialCharacters = confirm ("Include a Special Character?");
 
 if (upperCaseCharacter === false && lowerCaseCharacter === false && numeric === false && specialCharacters === false ){
   alert("You must chose at least 1 uppercase or 1 lowercase or 1 numeric value or 1 special character");
   return "";
 }
 
  if(upperCaseCharacter ===true)
{
  characterArraysChosenbyUser = characterArraysChosenbyUser + upperCaseArray;

}

if(lowerCaseCharacter ===true)
{
  characterArraysChosenbyUser = characterArraysChosenbyUser +  charactersArray;

}

if(numeric===true)
{
  characterArraysChosenbyUser = characterArraysChosenbyUser + numericArray;

}

if(specialCharacters===true)
{
  characterArraysChosenbyUser = characterArraysChosenbyUser + specialCharactersArray;

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
