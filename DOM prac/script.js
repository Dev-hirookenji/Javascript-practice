const app = document.getElementById("app");

//?input tutorial
app.innerHTML = `
<form name="example">
  <label>
    Blue
    <input type="radio" name="color" value="blue">
  </label>
  <label>
    Red
    <input type="radio" name="color" value="red">
  </label>
  <label>
    Green
    <input type="radio" name="color" value="green">
  </label>
</form>`;

const form = document.forms.example;
const radios = form.elements.color;
console.log(radios);

radios.forEach((item) => {
  console.log(item);
});

//? forms tutorial
// const div = document.createElement("div");
// app.innerHTML = `
//   <form name="formname">
//   <label>
//   Insert name:
//   <input type="text" name="fullname">
//   </label>
//   <select name="foods">
//     <option value="pizza">Pizza</option>
//     <option value="hotdog">Hotdog</option>
//     <option value="Burger">Burger</option>
//   </select>
//   <div>
//     <p>What Size?</p>
//     <label>Small
//       <input type="radio" name="size" value="small">
//     </label>
//     <label>Medium
//       <input type="radio" name="size" value="medium">
//     </label>
//     <label>Large
//       <input type="radio" name="size" value="large">
//     </label>
//   </div>
//   <label>
//     <p>Quantity</p>
//     <input type="number" name="quantity" value="1">
//   </label>
//   <button type="submit">Submit</button>
//   </form>
// `;

//? Orig
// app.innerHTML = `
// <button type="button">Add Item</button>
// <ul id="list">
// <li>Item 1</li>
// <li>Item 2</li>
// </ul>`;

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
//   const items = document.querySelectorAll("li");
//   const li = document.createElement("li");
//   li.innerText = `Item ${items.length + 1}`;
//   list.append(li);
//   li.addEventListener("click", handleClick);
// });

//! keyboard Events
// document.addEventListener("keydown", (event) => {
//   console.log(event.key, event.code);
// });

//!form submit and formdata
// const form = document.forms.formname;

// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(...new FormData(event.target));
// }

// function handleFormData(event) {
//   console.log([...event.formData]);
//   const entries = event.formData.entries();
//   for (const entry of entries) {
//     console.log(entry);
//   }
// }
// form.addEventListener("submit", handleSubmit);
// form.addEventListener("formdata", handleFormData);

//!Transforming data for the server
// const form = document.forms.formname;

// function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);

//   //?new way and easier
//   const asString = new URLSearchParams(formData).toString();
//   console.log(asString);

//   //?Json Approach PREFERRED
//   const asJson = JSON.stringify(Object.fromEntries(formData)); // * Remove JSON.stringify to view json
//   console.log(asJson);

//! api server tutorial
//   fetch("/fakeapi", {
//     method: "post",
//     headers: {
//       //"Content-Type": "application/x-www-form-urlencoded"
//       "Content-Type": "application/json",
//     },
//     body: asJSON,
//   });
// }

// form.addEventListener("submit", handleSubmit);
