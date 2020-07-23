

var asteriskString = "*";
var pyramidSpeed = "***";
var pyramidHeight = 10;

for (var counter = 0; counter < 100; counter++) {

    console.log(asteriskString);

    asteriskString = asteriskString + "*"

}

// Creating random numbers with JavaScript
Math.random(); // Creates random number between 0 and 1
Math.ceil(); // Takes in a number and rounds it up.
Math.floor(); // Takes in a number and rounds it down.
Math.round(); // Takes in a number and rounds based on decimal value


var myRandomNumber = Math.floor(Math.random() * 10) +1;


console.log(myRandomNumber);


// FUNCTIONS

// This code prompts user to respond to the question: "How are you today?"

function myFunction() {
   var response = prompt("How are you today?");

   if (response === "") {
       alert("You did not type anything in, bitch.");
       return false;
   } else {
       console.log(response);
       return true;
   }

}

// This 
var didTheyRead = myFunction();

while (didTheyRead === false || didTheyRead === null) {
    didTheyRead = myFunction();
}





