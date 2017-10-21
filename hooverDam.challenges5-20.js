//Challenge 5 (These Dam Loops)
//hooverDam.js
var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for (currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}

//Challenge 10 (Some Dam Complex Conditionals!)
//hooverDam.js
var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
  if (currentGen % 2 == 0 && currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen % 2 == 0 && currentGen >= 5) {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  }
}

//Challenge 11 (Pop-Up Windows 1)
//badlands.js
var parkIsOpen = false;

if (parkIsOpen) {
  alert("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  alert("Sorry, the Badlands are particularly bad today. We're closed!");
}




//Challenge 20 (Problem Solving with Functions 2)
//hooverDam.js
function changePowerTotal(total, ID, status, power) {
  if (status == "on") {
    total += power;
    alert("Generator #" + ID + " is now " + status + ", adding " + power + " MW, for a total of " + total + " MW!");
  } else if (status == "off") {
    total -= power;
    alert("Generator #" + ID + " is now " + status + ", removing " + power + " MW, for a total of " + total + " MW!");
  }
  return total;
}


