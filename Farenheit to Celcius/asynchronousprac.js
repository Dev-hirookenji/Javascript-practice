//!practicing callbacks

/*function mynameis(name) {
  setTimeout(() => {
    console.log(name);
  }, 1500);
}
mynameis("ken");

function surname(surr) {
  setTimeout(() => {
    console.log(surr);
  }, 1000);
}
surname("ferrer");*/

//! callback function
const foods = {
  Fruits: ["apple", "orange", "banana"],
  Drinks: ["Water", "cola", "juice"],
}; //selections

function order(foods_choice, drinks_choice, call_productions) {
  console.log(
    `${foods.Fruits[foods_choice]} and ${foods.Drinks[drinks_choice]} was selected`
  );
  call_productions();
}
function production() {
  console.log("your order has been processed");
}
order(2, 0, production);
