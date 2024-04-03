const app = document.getElementById("app");
app.innerHTML = `<ul id="lists">
<li>"kiss"</li>
<li>"bangus"</li>
</ul>`;

//creating forms using js dom

function createForm({ label, type = "type" }) {
  return `<label>
  ${label}
  <input type="${type}">
  </label>`;
}

const createdEmail = createForm({ label: "Email", type: "email" });
app.innerHTML += createdEmail;
const createdPassword = createForm({ label: "Password", type: "password" });
app.innerHTML += createdPassword;
//list

const data = ["Samsung A55", "Bag", "Sipag"];
const fragment = document.createDocumentFragment();

data.forEach((item) => {
  const li = document.createElement("li");
  li.className = "list-item";
  li.innerText = item;
  fragment.appendChild(li);
});

const getQuery = document.querySelector("#lists");
getQuery.append(fragment);

const newItem = document.createElement("li");
newItem.className = "list-item";
newItem.innerText = "Hello World";
getQuery.append(newItem);

//!looping through
const list = document.querySelectorAll("#lists li");
for (const items of list) {
  console.log(items);
}

//!
