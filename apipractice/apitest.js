//async await
const url = "https://api.genderize.io?name=peter";

async function apicall() {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
apicall();
