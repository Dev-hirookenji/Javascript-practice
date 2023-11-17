function promptme() {
  let text;
  let name = promt("Please enter your your name");
  if (name == null || person == "") {
    text = "No name entered";
  } else {
    text = "Hello" + name + "Welcome";
  }
}
