//Math Operators;
// +,-,*,/,%
// String Operator
// + (concatenation)

/*
Everything
in here
is a comment. 
This is a multi-line
comment
*/

//Conditional Operators
// All conditional operations tend to end up being a boolean.

/*
INDEPENDENT OF DATA TYPES

==
<
>
!= (not equal to)
! (reverses a boolean) !true == false     !false == true

<= lesser than or equal to
>= greater than or equal to, do not reverse as => is arrow function


DEPENDENT OF DATA TYPES
=== both are equal AND are the same data type
!== 

*/

var data1 = 10;
var data2 = "10";
// var data2 = parseInt("10"); // parseFlloat() to include periods as decimals.

//  Type Coercion

if (data1 === data2) {
    console.log("The condition was true.");
}

// Ternary Operator.
// condition ? true code : false code;

var isItTrue = (data1 == data2) ? 20 : 9;

console.log(isItTrue);

//Ternary Operator END

// Functions
function sayHelloThreeTimes() {
    console.log("Hello!");
    console.log("Hello!");
    console.log("Hello!");
}

sayHelloThreeTimes();

// Functions END

// Loops START
console.log("Loops Section");

// for (iterator; condition; increment) {code block}

for (var i = 0; i < 100; i = i + 1) {

    var text = "Loop number " + (i + 1);

    if (i % 2 === 1) {}

    console.log(text);
}
