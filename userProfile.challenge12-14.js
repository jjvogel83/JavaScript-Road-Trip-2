//Challenge 12 (Pop-Up Windows 2)

//userProfile.js
var userAge = prompt("What's your age, user?");



//Challenge 13 (Pop-Up Windows 3)

//userProfile.js
var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");




//Challenge 14 (An Entry Confirmation Loop)
//userProfile.js
var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while (ageIsCorrect == false) {
  if (confirm("You entered " + userAge + ". Is this correct?")) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  } else {
    userAge = prompt("What's your age, user?");
  }
}