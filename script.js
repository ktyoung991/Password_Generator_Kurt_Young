// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword(){
    var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var numeric = ["0","1","2","3","4","5","6","7","8","9"];
    var special = [" ","!",'"', '#','$','%','&',"'",'(',')','*','+',',','-',',','/',':',';','<','>','?','@','[','/',']','^','_','`','{','|','}','~'];
    var length = prompt('Please enter a numerical value for the length for the password you would like. Note: Password length must be between 8-128.');
    
    // validating that the password length is between 8 and 128
    if ((length <= 128) && (length >= 8)){
      var upperConf = confirm('Should the password contain uppercase letters?');
      var lowerConf = confirm('Should the password contain lowercase letters?');
      var numericConf = confirm('Should the password contain numeric characters?');
      var specialConf = confirm('Should the password contain special characters?');
      var tttt = upperCase.concat(lowerCase).concat(numeric).concat(special);
      
      
      if ((upperConf === true) && (lowerConf === true) && (numericConf === true) && (specialConf === true)){
        
        for (var i = 0; i < length; i++){
          var random = Math.floor(Math.random() * tttt.length) + 1
          var pass = [];
          pass = pass.push(tttt[random]);
          return pass;
        }
      }
    }
    else {
      alert('You did not enter a number between 8 and 128')
    }  

}

function generatePassword(){
    var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    var numeric = ["0","1","2","3","4","5","6","7","8","9"];
    var special = [" ","!",'"', '#','$','%','&',"'",'(',')','*','+',',','-',',','/',':',';','<','>','?','@','[','/',']','^','_','`','{','|','}','~'];
    var length = prompt('Please enter a numerical value for the length for the password you would like. Note: Password length must be between 8-128.');
    
    // validating that the password length is between 8 and 128
    if ((length <= 128) && (length >= 8)){
      var upperConf = confirm('Should the password contain uppercase letters?');
      var lowerConf = confirm('Should the password contain lowercase letters?');
      var numericConf = confirm('Should the password contain numeric characters?');
      var specialConf = confirm('Should the password contain special characters?');
      var tttt = upperCase.concat(lowerCase).concat(numeric).concat(special);
      
      
      if ((upperConf === true) && (lowerConf === true) && (numericConf === true) && (specialConf === true)){
        
        for (var i = 0; i < length; i++){
          var random = Math.floor(Math.random() * tttt.length) + 1
          var pass = [];
          pass = pass.push(tttt[random]);
          return pass;
        }
      }
    }
    else {
      alert('You did not enter a number between 8 and 128')
    }  

}
