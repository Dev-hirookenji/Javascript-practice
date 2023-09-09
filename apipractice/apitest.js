async function apitestcall() {
  let response = await fetch("https://api.genderize.io?name=scarlet");
  if (response.ok) {
    console.log("nice");
  } else {
    console.log("bad");
  }
  let data = await response.json();
  console.log(data);
}
apitestcall();
