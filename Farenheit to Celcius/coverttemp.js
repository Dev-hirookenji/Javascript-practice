//c to f
let c = 10;
let f;

function ctof() {
  f = (c * 9) / 5 + 32;
  return `The temp is: ${f}`;
}
console.log(ctof(f));

//f to c
let f1 = 10;
let c1;
function ftoc() {
  return (c1 = ((f1 - 32) * 5) / 9);
}
console.log(ftoc(c1));

//object
const obej = {
  fname: "Scarlet",
  lname: "Ferrer",
};
console.log(obej.fname);
// add with function
let num1 = 5;
let num2 = 11;

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(num1, num2));

console.log((99.1234).toFixed(1));
console.log((99.1234).toString(2));

//giving values for function parameters
function myname(fname, lname) {
  return `${fname} ${lname}`;
}
myname.fname = "Scarlet".toUpperCase();
myname.lname = "Ferrer".replace("Ferrer", "Hotdog".toUpperCase());

console.log("Your name is: " + myname.fname, myname.lname);

//trying assignment ops
let a = 10;
let b = 3;

a *= b; //(a = a * b)

console.log(a);

// new for loop
let names = ["markets", "scarlets", "Ferrer"];

for (const listahan of names) {
  //from for (let listahan = 0; listahan < names.length; listahan++)
  console.log(listahan);
}
/*
//while and do while loop
let num = 2;

while (num <= 20) {
  console.log(num);
  num += 2; // num = num + 2
}

let numr = 2;

do {
  console.log(numr);
  numr++;
} while (numr < 20);*/

function carname(name) {
  return `The car name is ${name.to}`;
}

carname("Hotdog");
//adding using params.reduce
function price(...params) {
  const total = params.reduce((prev, next) => prev + next);
  console.log(`The total is ${total}`);
}
price(20, 30, 40);
