//! using async await
const url = "https://api.genderize.io?name=peter";

async function apicall() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
apicall();

//!using fetch api
// fetch("https://api.genderize.io?name=peter")
//   .then((response) => {
//     console.log("successful", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });
