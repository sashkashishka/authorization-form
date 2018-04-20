import "./main.styl";
import LoginWindow from "./login-window";

let loginWindowHTML = new LoginWindow();

// use body as a parent block
// login-window position will be set as it is the main-window element
document.body.className = "body";
let mainSection = document.createElement("section");
mainSection.className = "main-window";
document.body.appendChild(mainSection)

// checking the availability of login in localStorage
document.addEventListener("DOMContentLoaded", function() {
  let login = sessionStorage.login;

  if (login) {
    let greetingDiv = document.createElement("div");
    greetingDiv.className = "greeting";
    greetingDiv.innerText = `Hello ${login}!`;
    mainSection.appendChild(greetingDiv);
  } else {
    // insert login-window template
    mainSection.appendChild(loginWindowHTML.elem);
  }
})



