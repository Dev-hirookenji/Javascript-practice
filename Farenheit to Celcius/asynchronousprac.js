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
  Fruits: ["banana", "strawberry", "apple"],
  Drinks: ["juice", "water", "cola"],
};

function order(fruit_choice, drinks_choice, confirmation_done) {
  console.log(
    `The selected fruit is ${foods.Fruits[fruit_choice]} and the drink is ${foods.Drinks[drinks_choice]}`
  );
  confirmation_done();
}

function confirmation() {
  setTimeout(() => {
    console.log("done");
  }, 5000);
}
order(0, 2, confirmation);
