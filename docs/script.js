console.log("[strong-password-generator] init");

function generatePassword() {
  var text = document.getElementById("password-text");
  console.log("[generatePassword] text", text);

  const password = Math.floor(Math.random() * (17 - 0 + 1) + 0);
  console.log("[generatePassword] password", password);

  text.innerText = password;
}
