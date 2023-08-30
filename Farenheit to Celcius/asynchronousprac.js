//!practicing callbacks

// function mynameis(name) {
//   setTimeout(() => {
//     console.log(name);
//   }, 1500);
// }
// mynameis("ken");

// function surname(surr) {
//   setTimeout(() => {
//     console.log(surr);
//   }, 1000);
// }
// surname("ferrer");

//! callback function
const foods = {
  Fruits: ["banana", "strawberry", "apple"],
  Drinks: ["juice", "water", "cola"],
};
const cut = {
  Slice: ["Cut into 1 piece", "Cut into 2 pieces", "Cut into 3 pieces"],
  Dice: ["Dice into 1 piece", "Dice into 2 pieces", "Dice into 3 pieces"],
};
const shop_is_open = true;
// function order(fruit_choice, drinks_choice, cut_choice, confirmation_done) {
//   console.log(
//     `The selected fruit is ${foods.Fruits[fruit_choice]} and the drink is ${foods.Drinks[drinks_choice]}`
//   );
//   setTimeout(() => {
//     console.log(`The chosen cut is to: ${cut.Slice[cut_choice]}`);
//   }, 1000);
//   confirmation_done();
// }

// function confirmation() {
//   setTimeout(() => {
//     console.log("done");
//   }, 3000);
// }
// order(0, 2, 2, confirmation);

function order(time, work) {
  return new Promise((resolve, reject) => {
    if (shop_is_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject.console.log("Sorry it's not available");
    }
  });
}

order(2000, () => console.log(`$[foods.Fruits[0] was selected`));
