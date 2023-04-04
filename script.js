var generateBtn = document.querySelector("#generate");
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password=document.getElementById("password");
var minPasswordLength = 8;
var maxPasswordLength = 128;
var password = "";
function generatePassword () {
  for (var i = 0; i >= minPasswordLength, i <=maxPasswordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
  }

}
 {
        document.getElementById("password").value = password;
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);