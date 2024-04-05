const app = document.getElementById("app");
app.innerHTML = `<ul id="lists">
<li>"kiss"</li>
<li>"bangus"</li>
</ul>`;

const div = document.createElement("div");
app.innerHTML = `
  <form>
    <label>
    Email
    <input type="email">
    </label></br>
    <label>
    Check me out
    <input type="checkbox">
    </label>
  </form>`;

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

// //!looping through
// const list = document.querySelectorAll("#lists li");
// for (items of list) {
//   console.log(items);
// }

// //!creating a button using dom
// const button = document.createElement("button");
// button.innerText = "Click me";
// app.append(button);

// function handleclick() {
//   console.log("clicked");
// }
// //? addEventListener
// button.addEventListener("click", handleclick);

// //!preventDefault();
// const form = document.querySelector("form");
// const email = form.querySelector('input[type="email"]');
// const checkbox = form.querySelector('input[type="checkbox"]');

// function submitHandler(event) {
//   event.preventDefault();
//   console.log(email.value, checkbox.checked);
// }

// form.addEventListener("submit", submitHandler);

// //! event delegation
// const list = document.querySelector("#list");
// const items = list.querySelectorAll("li");

// function handleclick(event) {
//   console.log(event.target.innerText);
// }
