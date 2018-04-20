import template from "./login-window.pug";


export default class LoginWindow {
  constructor() {

    this.elem = document.createElement("section");
    this.elem.className = "login-window";
    this.elem.innerHTML = template();

    this.form = this.elem.querySelector(".login-window__form");

    this.loginLabel = this.form.querySelector(".login-window__label-login")
    this.loginInput = this.form.querySelector(".login-window__input-login");
    
    this.passwordLabel = this.form.querySelector(".login-window__label-password")
    this.passwordInput = this.form.querySelector(".login-window__input-password");
    
    this.logInBtn = this.form.querySelector(".login-window__log-in-button");

  
    this.css = {
      invalidField: "login-window__input_no-valid-value",
      invalidTitle: "link-window__label_no-valid-value"
    };

    this.formMessages = {
      emptyField: "Required field",
      invalidCharacter: "Login consist of numbers, letters, spaces, dashes and apostrophes",
      numberLogin: "Login can't consist only of numbers",
      shortPassword: "Password at least 8 symbols in length"
    }

    // set the validation funciton to the form
    this.logInBtn.addEventListener("click", this.checkFormValidity.bind(this));
    this.form.addEventListener("submit", this.submit.bind(this));

    this.loginInput.addEventListener("input", this.checkLoginValidity.bind(this));
    this.passwordInput.addEventListener("input", this.checkPasswordValidity.bind(this));
  }

  // 
  checkLoginValidity() {

    // functions for highlighting the input field and label description
    function addValidityWarning(msg) {
      this.loginLabel.dataset.validityMsg = msg;
      this.loginLabel.classList.add(this.css.invalidTitle);
      this.loginInput.classList.add(this.css.invalidField);
    }

    function removeValidityWarning() {
      this.loginLabel.dataset.validityMsg = "";
      this.loginLabel.classList.remove(this.css.invalidTitle);
      this.loginInput.classList.remove(this.css.invalidField);
    }

    // bind functions to LoginWindow class
    let showWarning = addValidityWarning.bind(this);
    let removeWarning = removeValidityWarning.bind(this);
    

    let validity = this.loginInput.validity;
    let inputValue = this.loginInput.value;

    if (validity.valueMissing) {
      showWarning(this.formMessages.emptyField);
      return true;
    }

    // check login to match the selected characters 
    if (inputValue.match(/[^\d\w\s\-\']+/i)) {
      showWarning(this.formMessages.invalidCharacter);
      return true;
    }

    // login must consist of not only with numbers
    if (!inputValue.match(/[^\d]/ig)) {
      showWarning(this.formMessages.numberLogin);
      return true;
    }

    // if all validity checking stages are passed remove warning highlighting
    removeWarning();
    return false;
  }

  checkPasswordValidity() {

    // functions for highlighting the input field and label description
    function addValidityWarning(msg) {
      this.passwordLabel.dataset.validityMsg = msg;
      this.passwordLabel.classList.add(this.css.invalidTitle);
      this.passwordInput.classList.add(this.css.invalidField);
    }

    function removeValidityWarning() {
      this.passwordLabel.dataset.validityMsg = "";
      this.passwordLabel.classList.remove(this.css.invalidTitle);
      this.passwordInput.classList.remove(this.css.invalidField);
    }
    
    // bind functions to LoginWindow class
    let showWarning = addValidityWarning.bind(this);
    let removeWarning = removeValidityWarning.bind(this);

    let validity = this.passwordInput.validity;
    let inputValue = this.passwordInput.value;

    if (validity.valueMissing) {
      showWarning(this.formMessages.emptyField);
      return true;
    }

    if (validity.tooShort) {
      showWarning(this.formMessages.shortPassword)
      return true;
    }

    // if all validity checking stages are passed remove warning highlighting
    removeWarning();
  }
  

  checkFormValidity(e) {

    // custom validation
    let validationStatus = false;
    
    validationStatus = this.checkLoginValidity();
    validationStatus = this.checkPasswordValidity()
    
    // if form doesn't passed validation checking - return
    // also cancel form sending
    if (validationStatus) return e.preventDefault();
  }

  submit(e) {
    
    let formChildren = this.form.elements;

    // create an object where key=input.name value=input.value 
    let formData = {};
    Array.prototype.filter.call(formChildren, (item) => {
      return item.name;
    })
    .forEach((item) => {
      formData[item["name"]] = item.value;
    })
    
    
    // there can be AJAX request function to the server
    // but due to technical task we just write data to sessionStorage
    Object.keys(formData).forEach((key) => {
      sessionStorage[key] = formData[key];
    })
    
    e.preventDefault()
  }
}