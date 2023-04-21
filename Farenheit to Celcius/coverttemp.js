//c to f
let c = 10;
let f;

function ctof() {
  f = (c * 9) / 5 + 32;
  return f;
}
console.log(ctof(f));

//f to c
let f1 = 10;
let c1;
function ftoc() {
  c1 = ((f1 - 32) * 5) / 9;
  return c1;
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
