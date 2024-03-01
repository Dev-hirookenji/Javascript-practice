const { BaseTransitionPropsValidators } = require("vue");

//! Basic Switch case
let letter = "G";
switch (letter) {
  case "G":
    console.log("hello");
    break;
  case "I":
    console.log("world");
  default:
    console.log("wtf");
    break;
}
//? == does a type coersion (conversion) while === does care if the types are the same.
//? hoisting is we call a variable before it was even declared causing an error but var will work.

//! Basic if-else
let ifnum = 11;
let ifnum1 = 10;
let ifnum2 = 20;

if (ifnum === 11) {
  let total = ifnum1 + ifnum2;
  console.log(total);
} else if (ifnum > 10) {
  let total = ifnum1 * ifnum2;
  console.log(total);
} else {
  console.log("wtf");
}
//! sample function 1
let c = 30;
let f;
function ctof() {
  return (c * 9) / 5 + 32;
}
f = ctof();
console.log(`The equivalent of ${c} Celcius is ${f}`);

//! sample function 2
let c1 = 30;
let f1;
function ctof2(f1) {
  f1 = (c1 * 9) / 5 + 32;
  console.log(`The equivalent of ${c1} Celcius is ${f1}`);
}
ctof2();

//! playing with function
function carparts(brand, owner) {
  console.log(`The car is ${brand} and the owner is ${owner}`);
}
carparts("Toyota", "Scarlet");
carparts("Honda", "Ken");

// adding by reference
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 10));

//! using spread parameter
function total(...addthem) {
  const result = addthem.reduce((prev, next) => prev + next);
  return result;
}

const toAdd = total(29, 30);
console.log(toAdd);

//car part using return function

//!return function
function carstats(brand) {
  const carbrand = brand;
  return function (platenum) {
    return `The brand is: ${carbrand} and the plate number is ${platenum}`;
  };
}
const carfullstats = carstats("Tesla");
console.log(carfullstats("ABC 124"));
