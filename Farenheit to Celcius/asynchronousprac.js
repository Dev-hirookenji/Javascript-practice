//!practicing callbacks

// function call(call_name) {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 1500);
//   call_name();
// }

// function thename() {
//   setTimeout(() => {
//     console.log("Mark");
//   }, 5000);
// }
// call(thename);

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

// function order(food_choice, cut_choice, drink_choice, confirmation) {
//   if (shop_is_open) {
//     console.log(
//       `I want to order ${foods.Fruits[food_choice]} then ${cut.Slice[cut_choice]} and for my drinks I want ${foods.Drinks[drink_choice]}`
//     );
//   } else {
//     console.log("Sorry, the shop is closed.");
//   }
//   confirmation();
// }
// function checkout() {
//   console.log("Thank you for buying");
// }
// order(0, 2, 1, checkout);

//!Promise

// function order(time, work) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shop_is_open) {
//         resolve(work());
//       } else {
//         reject(console.log("We're not serving today"));
//       }
//     }, time);
//   });
// }
// order(2000, () => console.log(`My food is ${foods.Fruits[1]}`))
//   .then(() => {
//     return order(2000, () => console.log(`My drink is a ${foods.Drinks[1]}`));
//   })
//   .then(() => {
//     return order(2000, () => console.log(`Please serve it as ${cut.Slice[2]}`));
//   })
//   .catch(() => {
//     console.log("Sorry, the shop is closed.");
//   })
//   .finally(() => {
//     console.log("Thank you for using the program");
//   });
