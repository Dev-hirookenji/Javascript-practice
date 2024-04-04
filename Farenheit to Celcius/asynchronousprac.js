//!practicing callbacks

// function callback(callme) {
//   setTimeout(() => {
//     console.log("Mark");
//   }, 2500);
//   callme();
// }
// function call() {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 1000);
// }
// callback(call);

//! callback function
// const foods = {
//   Fruits: ["banana", "strawberry", "apple"],
//   Drinks: ["juice", "water", "cola"],
// };
// const cut = {
//   Slice: ["Cut into 1 piece", "Cut into 2 pieces", "Cut into 3 pieces"],
//   Dice: ["Dice into 1 piece", "Dice into 2 pieces", "Dice into 3 pieces"],
// };
// const shop_is_open = true;

// function order(food_choice, drink_choice, cut_choice, confirmation) {
//   if (shop_is_open) {
//     setTimeout(() => {
//       console.log(
//         `My orders are ${foods.Fruits[food_choice]}, my drinks is ${foods.Drinks[drink_choice]}, cut my order into ${cut.Slice[cut_choice]}`
//       );
//     }, 2500);
//     confirmation();
//   } else {
//     console.log("shop is closed");
//   }
// }

// function confirmorder() {
//   setTimeout(() => {
//     console.log("Thank you for your order");
//   }, 4000);
// }
// order(2, 1, 0, confirmorder);

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
