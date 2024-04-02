const app = document.getElementById("app");
app.innerHTML = `<ul id="lists"></ul>`;

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

data.forEach((list) => {
  const li = document.createElement("li");
  li.className = "list-items";
  li.innerText = list;
  fragment.append(li);
});

const ulfromid = document.getElementById("lists");
ulfromid.append(fragment);

const getbyclassname = ulfromid.getElementsByClassName("list-items");
console.log(getbyclassname);

const getbytagname = ulfromid.getElementsByTagName("li");
console.log(getbytagname);
//!adding new to the list
const newlistofitem = document.createElement("li");
newlistofitem.className = "list-items";
newlistofitem.innerText = "Dreams";
ulfromid.append(newlistofitem);
