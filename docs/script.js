console.log("[strong-password-generator] init");

function generatePassword() {
  const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789-_=!@#%()[].,/\\"
  console.log("[generatePassword] chars", chars);

  var text = document.getElementById("password-text");
  console.log("[generatePassword] text", text);

  var password = "";
  for (let i = 0; i < 18; i++) {
    console.log("[generatePassword] i", i);
    password += chars[Math.floor(Math.random() * chars.length)];
    console.log("[generatePassword] password", password);
  }
  console.log("[generatePassword] FINAL password", password);

  text.innerText = password;
}
