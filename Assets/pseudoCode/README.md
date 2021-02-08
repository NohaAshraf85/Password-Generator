# Password-Generator
Password Generator using Javascript

Pseudo Code:
Password Generator logic:

1- When the user clicks on the Generate Password button, the user is presented with a list of prompts
    - How many characters should the password be (passwordLength)
    - Check if the user wants uppeer case characters (upperCaseCharacter)
    - Check if the user wants lowercase (lowerCaseCharacter)
    - Check if the user wants numbers (numeric)
    - Check if the user wants special characters    (specialCharacters)

2- Upon receiving the user input, the input is validated (somehow, need to figure out how?)
3- Upon validation, the user input should be stored (somewhere, still need to figure out where?)
4- Upon storing the user password criteria inputs, there inputs are then run to randomly chose from a list of the arrays relevant to the user validated choices to pick at leadt one character from each choice and fill out the rest!

Number of variables we have:
    var passwordLength 
    var upperCaseCharacter 
    var lowerCaseCharacter 
    var numeric = prompt 
    var specialCharacters 

Number of Arrays:
    var charactersArray
    var numericArray
    var specialCharactersArray 
    var upperCaseArray 