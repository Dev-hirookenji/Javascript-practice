//c to f
let c = 10;
let f;

function ctof(f) {
  f = (c * 9) / 5 + 32;
  return `The temp in farenheit is: ${f}`;
}
console.log(ctof(f));

//f to c
let f1 = 10;
let c1;
function ftoc(c1) {
  return (c1 = ((f1 - 32) * 5) / 9);
}
console.log(ftoc(c1));

//object
const obej = {
  fname: "Scarlet",
  lname: "Ferrer",
};
obej.fname = "newww";
console.log(obej.fname);
// add with function
num1 = 500;
num2 = 1000;
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(num1, num2));

console.log((99.1234).toFixed(1));
console.log((99.1234).toString(2));

//giving values for function parameters

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

//adding using params.reduce
function price(...params) {
  return (total = params.reduce((prev, next) => prev + next));
}
price(20, 30, 40);
console.log(`total is: ${total}`);

const mynames = {
  fname: "Mark",
  lname: "Ferrer",
  getdetails() {
    return `The names are: ${this.fname} ${this.lname}`;
  },
};
console.log(mynames.getdetails());
/*
let i = 0;
while (i < 20) {
  i += 2;
  console.log(i);
}*/
/* another way of using function */
function totals(i, j) {
  return i + j;
}
let df = totals(12, 23);
console.log(df);
/**/
function getmyname(firstanme, suranme) {
  console.log(firstanme, suranme);
}
firstanme = "ken";
suranme = "ken";
getmyname(firstanme, suranme);

function hello(yourname, age) {
  console.log(`Hello ${yourname} your age is ${age}`);
}
hello("Ken", 23);
hello("Jessa", 24);
