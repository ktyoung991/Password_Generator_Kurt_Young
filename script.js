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
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var numeric = '0123456789';
    var special = '!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~';
    var length2 = prompt('Please enter a numerical value for the length for the password you would like. Note: Password length must be between 8-128.');
  

    // validating that the password length is between 8 and 128
    if ((length2 <= 128) && (length2 >= 8)){
      var upperConf = confirm('Should the password contain uppercase letters?');
      var lowerConf = confirm('Should the password contain lowercase letters?');
      var numericConf = confirm('Should the password contain numeric characters?');
      var specialConf = confirm('Should the password contain special characters?');

      // variable below describes a situation in which the user has answered true for all of the confirm questions.
      // I would create a variable for every instance of the user selections to generate the string to pull characters from randomly.
      var tttt = upperCase + lowerCase + numeric + special;      
      var pass = '';
      
      
      // generate an if statement with nested loops for every instance of the users selections.
      // I couldnt get this loop to run properly, so there was no sense in me repeating it if it is incorrect.
      if ((upperConf === true) && (lowerConf === true) && (numericConf === true) && (specialConf === true)){
        for (var i = 0; i < length2 ; i++) {
          // if i remove the code in lines 46-48 and replace with console.log('test') it runs 'length2' times.
          // for some reason I couldnt get the loop to run appropriately using the info below, and also trying with arrays further down on the page in the comments.
          var charSelector = Math.floor(Math.random() * tttt.length2);
          pass = pass + tttt.charAt(charSelector, charSelector + 1);
          return pass;
        }
        // here is where the other else statements would go, with each instance of user selection coded for.
      }
    }
    // if the password is not between 8 and 128 characters, the statement below is alerted to the user, no password generated.
    else {
      alert('You did not enter a number between 8 and 128')
    }  

}
// I tried doing this with arrays, but i couldnt get it to work. If you could take a look and let me know what I am doing wrong that would be great.

// function generatePassword(){
//   var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   var lowerCase = ["a", "b", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
//   var numeric = ["0","1","2","3","4","5","6","7","8","9"];
//   var special = [" ","!",'"', '#','$','%','&',"'",'(',')','*','+',',','-',',','/',':',';','<','>','?','@','[','/',']','^','_','`','{','|','}','~'];
//   var length = prompt('Please enter a numerical value for the length for the password you would like. Note: Password length must be between 8-128.');
  
//   // validating that the password length is between 8 and 128
//   if ((length <= 128) && (length >= 8)){
//     var upperConf = confirm('Should the password contain uppercase letters?');
//     var lowerConf = confirm('Should the password contain lowercase letters?');
//     var numericConf = confirm('Should the password contain numeric characters?');
//     var specialConf = confirm('Should the password contain special characters?');
//     var tttt = upperCase.concat(lowerCase).concat(numeric).concat(special);
    
    
//     if ((upperConf === true) && (lowerConf === true) && (numericConf === true) && (specialConf === true)){
      
//       for (var i = 0; i < length; i++){
//         var random = Math.floor(Math.random() * tttt.length) + 1
//         var pass = [];
//         pass = pass.push(tttt[random]);
//         return pass;
//       }
//     }
//   }
//   else {
//     alert('You did not enter a number between 8 and 128')
//   }  

// }
