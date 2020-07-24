
function addNumber() {
    var number1 = 10;
    var number2 = 100;

    var sum = number1 + number2

    return sum

}

var myNumber = addNumber();

// Function Arguments and PArameters
// Parameters are function variables



function myFunction(myFunctionVariable) {

    console.log(myFunctionVariable);

}


myFunction();

// Arguments are the values for the Parameters. And provided within the parenthesis just like Parameters. 

function mathify(num1, num2) {

    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;

    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Quotient: " + quotient);

    return "done!";

}

function caTax(priceTotal) {
    
    var tax = priceTotal * .085;
    var totalExpense = priceTotal + tax;

    return totalExpense;

}


function excited(sentence) {
}

excited("hello");

/* Anatomy

function NAME(Parameters) {
    code to run
    use Parameters
    return value
}

NAME(ARGUMENTS);

*/

var oneValue = 800;

oneValue = 500;

var days = ["monday",
"tuesday",
"wednesday",
"thursday", "friday",
"saturday",
"sunday"
];

var multiDimensonalArray = [
    [10, 20]
    [100, 200]
];

function addArrays(array1, array2) {

    var newArray = [
        array1[0] + array2[0]
    ]

    return newArray;
}

var firstArray = [1,10];
var secondArray = [9, 90];
var sumArray = addArrays(firstArray, secondArray);

console.log(sumArray);

// Array functions
// . push() puts a new piece of data at the end of the array. 
// Ex. myArray.push("last item!");
// .pop() removes the last piece of data in the array and (returns it to wherever you alled .pop())
// .shift() removes first piece of data in the array (and returns it to wherever you called it.)
// .unshift() puts a new piece of data at the beginning of the array.

// PUSH EXAMPLE

var multiples = [];
var mulitplier = 12;

for(var i = 0; i <= 12; i = i++) {

    var product = i * multiplier; 
    multiples.push(product);

}

multiples.shift();

//multiples.shift(); will get rid of the starting zero

console.log(multiples);

function multiplesTables(multiplier, max = 12) {

    for (var i = 0; i <= 12; i = i + 1) {
        var product = i * multiplier;
        multiples.push(product);

    }
}