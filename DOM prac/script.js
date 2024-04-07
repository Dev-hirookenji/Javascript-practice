const app = document.getElementById("app");
app.innerHTML = `
<button type="button">Add Item</button>
<ul id="list">
<li>Item 1</li>
<li>Item 2</li>
</ul>`;

// const div = document.createElement("div");
// app.innerHTML = `
//   <form>
//     <label>
//     Email
//     <input type="email">
//     </label></br>
//     <label>
//     Check me out
//     <input type="checkbox">
//     </label>
//   </form>`;

//creating forms using js dom

// function createForm({ label, type = "type" }) {
//   return `<label>
//   ${label}
//   <input type="${type}">
//   </label>`;
// }

// const createdEmail = createForm({ label: "Email", type: "email" });
// app.innerHTML += createdEmail;
// const createdPassword = createForm({ label: "Password", type: "password" });
// app.innerHTML += createdPassword;
//list

// const data = ["Samsung A55", "Bag", "Sipag"];
// const fragment = document.createDocumentFragment();

// data.forEach((item) => {
//   const li = document.createElement("li");
//   li.className = "list-item";
//   li.innerText = item;
//   fragment.append(li);
// });

// const selector = document.querySelector("#lists");
// selector.append(fragment);

// const newItem = document.createElement("li");
// newItem.className = "list-item";
// newItem.innerText = "New Item";

// selector.append(newItem);

//!looping through
// const list = document.querySelectorAll("#lists li");
// for (items of list) {
//   console.log(items);
// }

//!creating a button using dom
// const button = document.createElement("button");
// button.innerText = "Click me";
// app.append(button);

// function handleclick() {
//   console.log("clicked");
// }
//? addEventListener
// button.addEventListener("click", handleclick);

//!preventDefault();
// const form = document.querySelector("form");
// const email = document.querySelector('input[type="email"]');
// const checkbox = document.querySelector('input[type="checkbox"]');

// function clickhandler(event) {
//   event.preventDefault();
//   console.log(email.value, checkbox.checked);
// }

// form.addEventListener("submit", clickhandler);

//! event delegation
// const button = document.querySelector("button");
// const list = document.querySelector("#list");

// function handleClick(event) {
//   console.log(event.target.innerText);
// }

// list.addEventListener("click", handleClick);

// button.addEventListener("click", () => {
//   const item = list.querySelectorAll("li");
//   const li = document.createElement("li");
//   li.innerText = `Item ${item.length + 1}`;
//   list.appendChild(li);
//   li.addEventListener("click", handleClick);
// });

//! keyboard Events
document.addEventListener("keydown", (event) => {
  console.log(event.key, event.code);
});
