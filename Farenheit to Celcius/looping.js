// let fnum = 1;
// let snum = 9;
// let ans;

// for (fnum = 1; fnum <= 10; fnum++) {
//   ans = fnum * snum;
//   console.log(`${fnum} * ${snum} = ${ans}`);
// }

// while (fnum <= 10) {
//   ans = fnum * snum;
//   console.log(`${fnum} * ${snum} = ${ans}`);
//   fnum++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log("Sandman");
// }

//? ABCDEFG REVERSE & loop 1 to 100 with 3 and 5 printing fuzz, buzz and together. unnatural table to natural = SQL
//! Reversed by reverse method
let arr = ["a", "b", "c", "d", "e", "f", "g"];
// for (list of arr) {
//   console.log(arr.reverse());
//? OR
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }
//! Fizzbuzz
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} fizzbuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} buzz`);
//   } else {
//     console.log(i);
//   }
// }

//! sorting from highest to lowest vice versa
function sortLow(arr1) {
  return arr1.sort((a, b) => b - a); //? this is the main algorithm, b - a will make in in descending order while a - b will make it on ascending order
}
const numberss = [25, 23, 9, 50, 12];
const sortednums = sortLow(numberss);

console.log(sortednums);
//! add using while
let num1 = 1;
let num2 = 9;
while (num1 <= 10) {
  let total = num1 * num2;
  console.log(`${num1} * ${num2} = ${total}`);
  num1++;
}
