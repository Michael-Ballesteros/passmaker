var generateBtn = document.querySelector("#generate");
var emptyPass = [];
var emptyPass2 = [];
var userChoice;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword() {
 userChoice = prompt("Enter a password length 8 to 128");
 
 
 if (userChoice < 8 || userChoice > 128) {
 alert("Must be 8 to 128 characters") 
  }
 else {
 if (confirm("Do you want Lower Case") == true) {
   emptyPass.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
 }
 if (confirm("Do you want Upper Case") == true) {
  emptyPass.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
 }
 if (confirm("Do you want Numbers") == true) {
  emptyPass.push("1","2","3","4","5","6","7","8","9","0");
}
if (confirm("Do you want Special Characters") == true) {
  emptyPass.push("~",",","!","@","#","$","%","^","&","*","(",")","_","+","~","`","=","-");
}
}
for (var i = 0; i < userChoice; i++) {
var index = emptyPass[Math.floor(Math.random() * emptyPass.length)];
emptyPass2.push(index);
}
return emptyPass2.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

