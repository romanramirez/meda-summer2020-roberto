const { runInContext } = require("vm");

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
        array1[1] + array2[1]
    ]

    return newArray;
}

var firstArray = [1,10];
var secondArray = [9, 90];
var sumArray = addArrays(firstArray, secondArray);

console.log(sumArray);