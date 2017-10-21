//Challenge 2 (Problem Solving Loop Operations)

//deathValley.js
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

//Challenge 4 (From a While to a For Loop 2)
//deathValley.js

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");

//Challenge 8 (Problem Solving with Conditionals)

//deathValley.js
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (numSheep > 10000) {
    numSheep = numSheep / 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}





//Challenge 9 (Too Many Sheep! (or the Else If Statement))

//deathValley.js
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if (monthNumber % 4 == 0) {
    var reduction = numSheep * .75;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  else if (numSheep > 10000) {
    var reduction = numSheep * .5;
    console.log("Removing " + reduction + " sheep from the population.");
    numSheep -= reduction;
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}


//Challenge 19 (Problem Solving with Functions 1)

//deathValley.js
function feedPerRanger(population, rangers) {
  var feedPerRanger = (population * 2) / rangers;
  alert("Each Park Ranger should load " + feedPerRanger + " lbs of feed today.");
}
