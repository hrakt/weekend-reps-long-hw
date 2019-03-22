// PART A

// How do we assign a value to a variable?
// let, const, var followed by the name of the variable and equal it to the value

// How do we change the value of a variable?
// just name of the variable and make it equal to whatever the new value is going to be

// How do we assign an existing variable to a new variable?
// ex. let newVar = oldVar;

// Remind me, what are declare, assign, and define?
// declare is when you declare the variable, so assign name, not necessary to assgin it something
// assign is when you assign a specific value to the variable
// define is when you decalare and at the same time define what its going to hold


// What is pseudocoding and why should you do it?
//pseduocoding is when you type out the code in plain english to understand what needs to coded

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// most of the time you need to spend pseudocoding and understanding the logic behind the problem
// once you figured out the logic and the pseudocode then you need to start working on the code

// PART B

var firstVariable = "Hello World";
firstVariable = 12;
var secondVariable = firstVariable;
secondVariable = "Bye World";
console.log(firstVariable); // value of the first variable

var yourName = "Hrak T";
var newStr = "Hello my name is " + yourName;
console.log(newStr);


// PART C

const a = 4;
const b = 53;
const c = 57;
const d = 16; 
const e = 'Kevin';
console.log(a != b);
console.log(c != d);
console.log('Name' == 'Name');
console.log(true != false);
console.log(false == false == false == false == false == false == true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a != b != c);
console.log(a == a != d);
console.log(48 == '48');


// PART D

var animal = 'cow';
if(animal = 'cow'){
    console.log('mooooo');
}else{
    console.log('hey you are not a cow');
}

//Part E

var age = 26;
if(age>16){
    console.log("Here are the keys");
}else{
    console.log("Sorry youre too young");
}