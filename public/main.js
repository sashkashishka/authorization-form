var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/pug-runtime/index.js":
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./login-window/__footer/login-window__footer.pug":
/*!********************************************************!*\
  !*** ./login-window/__footer/login-window__footer.pug ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"login-window__footer\"\u003E\u003Cspan class=\"login-window__footer_sign-up\"\u003EDont have an account yet? \u003C\u002Fspan\u003E\u003Ca class=\"link login-window__footer_link login-window__footer_link_size_m\" href=\"#\"\u003ESign up \u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./login-window/__form-container/login-window__form-container.pug":
/*!************************************************************************!*\
  !*** ./login-window/__form-container/login-window__form-container.pug ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"login-window__form-container\"\u003E \u003Cform class=\"login-window__form\" action=\"#\"\u003E\u003Clabel class=\"login-window__label login-window__label-login\" for=\"login\" data-validity-msg=\"\"\u003ELogin\u003Cinput class=\"input login-window__input login-window__input-login\" required type=\"text\" id=\"login\" name=\"login\"\u003E\u003C\u002Flabel\u003E\u003Clabel class=\"login-window__label login-window__label-password\" for=\"password\"\u003EPassword\u003Cinput class=\"input login-window__input login-window__input-password\" required minlength=\"8\" type=\"password\" id=\"password\" name=\"password\"\u003E\u003C\u002Flabel\u003E\u003Clabel class=\"login-window__label login-window__label_width_max login-window__label_align-content_middle\" for=\"remember-me\"\u003E \u003Cinput class=\"checkbox login-window__checkbox-remember-me\" type=\"checkbox\" id=\"remember-me\" checked\u003ERemember me\u003C\u002Flabel\u003E\u003Cinput class=\"button login-window__log-in-button\" type=\"submit\" value=\"Log in\"\u003E\u003Ca class=\"link login-window__link login-window__link_size_s\" href=\"#\"\u003ENeed help logging in?\u003C\u002Fa\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./login-window/__header/login-window__header.pug":
/*!********************************************************!*\
  !*** ./login-window/__header/login-window__header.pug ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"login-window__header\"\u003E\u003Ch1 class=\"login-window__title\"\u003ELog in to the Site\u003C\u002Fh1\u003E\u003Cbutton class=\"button login-window__exit-button\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./login-window/__social/login-window__social.pug":
/*!********************************************************!*\
  !*** ./login-window/__social/login-window__social.pug ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"login-window__social\"\u003E \u003Cbutton class=\"button login-window__social-login-button facebook\"\u003E \u003Cimg" + (" class=\"facebook-logo\""+pug.attr("src", __webpack_require__(/*! ../../pics/icons/facebook-logo.svg */ "./pics/icons/facebook-logo.svg"), true, true)) + "\u003E\u003Cp class=\"button__value\"\u003E Log in with Facebook\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"button login-window__social-login-button google-plus\"\u003E \u003Cimg" + (" class=\"google-plus-logo\""+pug.attr("src", __webpack_require__(/*! ../../pics/icons/google-plus.svg */ "./pics/icons/google-plus.svg"), true, true)) + "\u003E\u003Cp class=\"button__value\"\u003E Log in with Google +\u003C\u002Fp\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./login-window/index.js":
/*!*******************************!*\
  !*** ./login-window/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_window_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-window.pug */ "./login-window/login-window.pug");
/* harmony import */ var _login_window_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_window_pug__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



let LoginWindow = function () {
  function LoginWindow() {
    _classCallCheck(this, LoginWindow);

    this.elem = document.createElement("section");
    this.elem.className = "login-window";
    this.elem.innerHTML = _login_window_pug__WEBPACK_IMPORTED_MODULE_0___default()();

    this.form = this.elem.querySelector(".login-window__form");

    this.loginLabel = this.form.querySelector(".login-window__label-login");
    this.loginInput = this.form.querySelector(".login-window__input-login");

    this.passwordLabel = this.form.querySelector(".login-window__label-password");
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

      // set the validation funciton to the form
    };this.logInBtn.addEventListener("click", this.checkFormValidity.bind(this));
    this.form.addEventListener("submit", this.submit.bind(this));

    this.loginInput.addEventListener("input", this.checkLoginValidity.bind(this));
    this.passwordInput.addEventListener("input", this.checkPasswordValidity.bind(this));
  }

  // 


  _createClass(LoginWindow, [{
    key: "checkLoginValidity",
    value: function checkLoginValidity() {

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
  }, {
    key: "checkPasswordValidity",
    value: function checkPasswordValidity() {

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
        showWarning(this.formMessages.shortPassword);
        return true;
      }

      // if all validity checking stages are passed remove warning highlighting
      removeWarning();
    }
  }, {
    key: "checkFormValidity",
    value: function checkFormValidity(e) {

      // custom validation
      let validationStatus = false;

      validationStatus = this.checkLoginValidity();
      validationStatus = this.checkPasswordValidity();

      // if form doesn't passed validation checking - return
      // also cancel form sending
      if (validationStatus) return e.preventDefault();
    }
  }, {
    key: "submit",
    value: function submit(e) {

      let formChildren = this.form.elements;

      // create an object where key=input.name value=input.value 
      let formData = {};
      Array.prototype.filter.call(formChildren, item => {
        return item.name;
      }).forEach(item => {
        formData[item["name"]] = item.value;
      });

      // there can be AJAX request function to the server
      // but due to technical task we just write data to sessionStorage
      Object.keys(formData).forEach(key => {
        sessionStorage[key] = formData[key];
      });

      e.preventDefault();
    }
  }]);

  return LoginWindow;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoginWindow);

/***/ }),

/***/ "./login-window/login-window.pug":
/*!***************************************!*\
  !*** ./login-window/login-window.pug ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ "../node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + ((null == (pug_interp = __webpack_require__(/*! ./__header/login-window__header.pug */ "./login-window/__header/login-window__header.pug").call(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"login-window__social-and-form-wrapper\"\u003E" + (null == (pug_interp = __webpack_require__(/*! ./__social/login-window__social.pug */ "./login-window/__social/login-window__social.pug").call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ./__form-container/login-window__form-container.pug */ "./login-window/__form-container/login-window__form-container.pug").call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E" + (null == (pug_interp = __webpack_require__(/*! ./__footer/login-window__footer.pug */ "./login-window/__footer/login-window__footer.pug").call(this, locals)) ? "" : pug_interp));;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.styl */ "./main.styl");
/* harmony import */ var _main_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-window */ "./login-window/index.js");



let loginWindowHTML = new _login_window__WEBPACK_IMPORTED_MODULE_1__["default"]();

// use body as a parent block
// login-window position will be set as it is the main-window element
document.body.className = "body";
let mainSection = document.createElement("section");
mainSection.className = "main-window";
document.body.appendChild(mainSection);

// checking the availability of login in localStorage
document.addEventListener("DOMContentLoaded", function () {
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
});

/***/ }),

/***/ "./main.styl":
/*!*******************!*\
  !*** ./main.styl ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./pics/icons/facebook-logo.svg":
/*!**************************************!*\
  !*** ./pics/icons/facebook-logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pics/icons/facebook-logo.svg";

/***/ }),

/***/ "./pics/icons/google-plus.svg":
/*!************************************!*\
  !*** ./pics/icons/google-plus.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pics/icons/google-plus.svg";

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9sb2dpbi13aW5kb3cvX19mb290ZXIvbG9naW4td2luZG93X19mb290ZXIucHVnIiwid2VicGFjazovL1tuYW1lXS8uL2xvZ2luLXdpbmRvdy9fX2Zvcm0tY29udGFpbmVyL2xvZ2luLXdpbmRvd19fZm9ybS1jb250YWluZXIucHVnIiwid2VicGFjazovL1tuYW1lXS8uL2xvZ2luLXdpbmRvdy9fX2hlYWRlci9sb2dpbi13aW5kb3dfX2hlYWRlci5wdWciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbG9naW4td2luZG93L19fc29jaWFsL2xvZ2luLXdpbmRvd19fc29jaWFsLnB1ZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9sb2dpbi13aW5kb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbG9naW4td2luZG93L2xvZ2luLXdpbmRvdy5wdWciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9tYWluLnN0eWwiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vcGljcy9pY29ucy9mYWNlYm9vay1sb2dvLnN2ZyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9waWNzL2ljb25zL2dvb2dsZS1wbHVzLnN2ZyIsIndlYnBhY2s6Ly9bbmFtZV0vZnMgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIkxvZ2luV2luZG93IiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInRlbXBsYXRlIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkxhYmVsIiwibG9naW5JbnB1dCIsInBhc3N3b3JkTGFiZWwiLCJwYXNzd29yZElucHV0IiwibG9nSW5CdG4iLCJjc3MiLCJpbnZhbGlkRmllbGQiLCJpbnZhbGlkVGl0bGUiLCJmb3JtTWVzc2FnZXMiLCJlbXB0eUZpZWxkIiwiaW52YWxpZENoYXJhY3RlciIsIm51bWJlckxvZ2luIiwic2hvcnRQYXNzd29yZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0Zvcm1WYWxpZGl0eSIsImJpbmQiLCJzdWJtaXQiLCJjaGVja0xvZ2luVmFsaWRpdHkiLCJjaGVja1Bhc3N3b3JkVmFsaWRpdHkiLCJhZGRWYWxpZGl0eVdhcm5pbmciLCJtc2ciLCJkYXRhc2V0IiwidmFsaWRpdHlNc2ciLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVWYWxpZGl0eVdhcm5pbmciLCJyZW1vdmUiLCJzaG93V2FybmluZyIsInJlbW92ZVdhcm5pbmciLCJ2YWxpZGl0eSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInZhbHVlTWlzc2luZyIsIm1hdGNoIiwidG9vU2hvcnQiLCJlIiwidmFsaWRhdGlvblN0YXR1cyIsInByZXZlbnREZWZhdWx0IiwiZm9ybUNoaWxkcmVuIiwiZWxlbWVudHMiLCJmb3JtRGF0YSIsIkFycmF5IiwicHJvdG90eXBlIiwiZmlsdGVyIiwiY2FsbCIsIml0ZW0iLCJuYW1lIiwiZm9yRWFjaCIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJzZXNzaW9uU3RvcmFnZSIsImxvZ2luV2luZG93SFRNTCIsImJvZHkiLCJtYWluU2VjdGlvbiIsImFwcGVuZENoaWxkIiwibG9naW4iLCJncmVldGluZ0RpdiIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFD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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwibG9naW4td2luZG93X19mb290ZXJcXFwiXFx1MDAzRVxcdTAwM0NzcGFuIGNsYXNzPVxcXCJsb2dpbi13aW5kb3dfX2Zvb3Rlcl9zaWduLXVwXFxcIlxcdTAwM0VEb250IGhhdmUgYW4gYWNjb3VudCB5ZXQ/IFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwibGluayBsb2dpbi13aW5kb3dfX2Zvb3Rlcl9saW5rIGxvZ2luLXdpbmRvd19fZm9vdGVyX2xpbmtfc2l6ZV9tXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VTaWduIHVwIFxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImxvZ2luLXdpbmRvd19fZm9ybS1jb250YWluZXJcXFwiXFx1MDAzRSBcXHUwMDNDZm9ybSBjbGFzcz1cXFwibG9naW4td2luZG93X19mb3JtXFxcIiBhY3Rpb249XFxcIiNcXFwiXFx1MDAzRVxcdTAwM0NsYWJlbCBjbGFzcz1cXFwibG9naW4td2luZG93X19sYWJlbCBsb2dpbi13aW5kb3dfX2xhYmVsLWxvZ2luXFxcIiBmb3I9XFxcImxvZ2luXFxcIiBkYXRhLXZhbGlkaXR5LW1zZz1cXFwiXFxcIlxcdTAwM0VMb2dpblxcdTAwM0NpbnB1dCBjbGFzcz1cXFwiaW5wdXQgbG9naW4td2luZG93X19pbnB1dCBsb2dpbi13aW5kb3dfX2lucHV0LWxvZ2luXFxcIiByZXF1aXJlZCB0eXBlPVxcXCJ0ZXh0XFxcIiBpZD1cXFwibG9naW5cXFwiIG5hbWU9XFxcImxvZ2luXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRVxcdTAwM0NsYWJlbCBjbGFzcz1cXFwibG9naW4td2luZG93X19sYWJlbCBsb2dpbi13aW5kb3dfX2xhYmVsLXBhc3N3b3JkXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIlxcdTAwM0VQYXNzd29yZFxcdTAwM0NpbnB1dCBjbGFzcz1cXFwiaW5wdXQgbG9naW4td2luZG93X19pbnB1dCBsb2dpbi13aW5kb3dfX2lucHV0LXBhc3N3b3JkXFxcIiByZXF1aXJlZCBtaW5sZW5ndGg9XFxcIjhcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBpZD1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRVxcdTAwM0NsYWJlbCBjbGFzcz1cXFwibG9naW4td2luZG93X19sYWJlbCBsb2dpbi13aW5kb3dfX2xhYmVsX3dpZHRoX21heCBsb2dpbi13aW5kb3dfX2xhYmVsX2FsaWduLWNvbnRlbnRfbWlkZGxlXFxcIiBmb3I9XFxcInJlbWVtYmVyLW1lXFxcIlxcdTAwM0UgXFx1MDAzQ2lucHV0IGNsYXNzPVxcXCJjaGVja2JveCBsb2dpbi13aW5kb3dfX2NoZWNrYm94LXJlbWVtYmVyLW1lXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcInJlbWVtYmVyLW1lXFxcIiBjaGVja2VkXFx1MDAzRVJlbWVtYmVyIG1lXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcXHUwMDNDaW5wdXQgY2xhc3M9XFxcImJ1dHRvbiBsb2dpbi13aW5kb3dfX2xvZy1pbi1idXR0b25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgdmFsdWU9XFxcIkxvZyBpblxcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImxpbmsgbG9naW4td2luZG93X19saW5rIGxvZ2luLXdpbmRvd19fbGlua19zaXplX3NcXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRU5lZWQgaGVscCBsb2dnaW5nIGluP1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmZvcm1cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJsb2dpbi13aW5kb3dfX2hlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2gxIGNsYXNzPVxcXCJsb2dpbi13aW5kb3dfX3RpdGxlXFxcIlxcdTAwM0VMb2cgaW4gdG8gdGhlIFNpdGVcXHUwMDNDXFx1MDAyRmgxXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBsb2dpbi13aW5kb3dfX2V4aXQtYnV0dG9uXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImxvZ2luLXdpbmRvd19fc29jaWFsXFxcIlxcdTAwM0UgXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGxvZ2luLXdpbmRvd19fc29jaWFsLWxvZ2luLWJ1dHRvbiBmYWNlYm9va1xcXCJcXHUwMDNFIFxcdTAwM0NpbWdcIiArIChcIiBjbGFzcz1cXFwiZmFjZWJvb2stbG9nb1xcXCJcIitwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKFwiLi4vLi4vcGljcy9pY29ucy9mYWNlYm9vay1sb2dvLnN2Z1wiKSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcImJ1dHRvbl9fdmFsdWVcXFwiXFx1MDAzRSBMb2cgaW4gd2l0aCBGYWNlYm9va1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDYnV0dG9uIGNsYXNzPVxcXCJidXR0b24gbG9naW4td2luZG93X19zb2NpYWwtbG9naW4tYnV0dG9uIGdvb2dsZS1wbHVzXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKFwiIGNsYXNzPVxcXCJnb29nbGUtcGx1cy1sb2dvXFxcIlwiK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoXCIuLi8uLi9waWNzL2ljb25zL2dvb2dsZS1wbHVzLnN2Z1wiKSwgdHJ1ZSwgdHJ1ZSkpICsgXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcImJ1dHRvbl9fdmFsdWVcXFwiXFx1MDAzRSBMb2cgaW4gd2l0aCBHb29nbGUgK1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9sb2dpbi13aW5kb3cucHVnXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5XaW5kb3cge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgdGhpcy5lbGVtLmNsYXNzTmFtZSA9IFwibG9naW4td2luZG93XCI7XHJcbiAgICB0aGlzLmVsZW0uaW5uZXJIVE1MID0gdGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvcihcIi5sb2dpbi13aW5kb3dfX2Zvcm1cIik7XHJcblxyXG4gICAgdGhpcy5sb2dpbkxhYmVsID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4td2luZG93X19sYWJlbC1sb2dpblwiKVxyXG4gICAgdGhpcy5sb2dpbklucHV0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4td2luZG93X19pbnB1dC1sb2dpblwiKTtcclxuICAgIFxyXG4gICAgdGhpcy5wYXNzd29yZExhYmVsID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4td2luZG93X19sYWJlbC1wYXNzd29yZFwiKVxyXG4gICAgdGhpcy5wYXNzd29yZElucHV0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4td2luZG93X19pbnB1dC1wYXNzd29yZFwiKTtcclxuICAgIFxyXG4gICAgdGhpcy5sb2dJbkJ0biA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXdpbmRvd19fbG9nLWluLWJ1dHRvblwiKTtcclxuXHJcbiAgXHJcbiAgICB0aGlzLmNzcyA9IHtcclxuICAgICAgaW52YWxpZEZpZWxkOiBcImxvZ2luLXdpbmRvd19faW5wdXRfbm8tdmFsaWQtdmFsdWVcIixcclxuICAgICAgaW52YWxpZFRpdGxlOiBcImxpbmstd2luZG93X19sYWJlbF9uby12YWxpZC12YWx1ZVwiXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZm9ybU1lc3NhZ2VzID0ge1xyXG4gICAgICBlbXB0eUZpZWxkOiBcIlJlcXVpcmVkIGZpZWxkXCIsXHJcbiAgICAgIGludmFsaWRDaGFyYWN0ZXI6IFwiTG9naW4gY29uc2lzdCBvZiBudW1iZXJzLCBsZXR0ZXJzLCBzcGFjZXMsIGRhc2hlcyBhbmQgYXBvc3Ryb3BoZXNcIixcclxuICAgICAgbnVtYmVyTG9naW46IFwiTG9naW4gY2FuJ3QgY29uc2lzdCBvbmx5IG9mIG51bWJlcnNcIixcclxuICAgICAgc2hvcnRQYXNzd29yZDogXCJQYXNzd29yZCBhdCBsZWFzdCA4IHN5bWJvbHMgaW4gbGVuZ3RoXCJcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdGhlIHZhbGlkYXRpb24gZnVuY2l0b24gdG8gdGhlIGZvcm1cclxuICAgIHRoaXMubG9nSW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hlY2tGb3JtVmFsaWRpdHkuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmxvZ2luSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuY2hlY2tMb2dpblZhbGlkaXR5LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5wYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLmNoZWNrUGFzc3dvcmRWYWxpZGl0eS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIC8vIFxyXG4gIGNoZWNrTG9naW5WYWxpZGl0eSgpIHtcclxuXHJcbiAgICAvLyBmdW5jdGlvbnMgZm9yIGhpZ2hsaWdodGluZyB0aGUgaW5wdXQgZmllbGQgYW5kIGxhYmVsIGRlc2NyaXB0aW9uXHJcbiAgICBmdW5jdGlvbiBhZGRWYWxpZGl0eVdhcm5pbmcobXNnKSB7XHJcbiAgICAgIHRoaXMubG9naW5MYWJlbC5kYXRhc2V0LnZhbGlkaXR5TXNnID0gbXNnO1xyXG4gICAgICB0aGlzLmxvZ2luTGFiZWwuY2xhc3NMaXN0LmFkZCh0aGlzLmNzcy5pbnZhbGlkVGl0bGUpO1xyXG4gICAgICB0aGlzLmxvZ2luSW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLmNzcy5pbnZhbGlkRmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVZhbGlkaXR5V2FybmluZygpIHtcclxuICAgICAgdGhpcy5sb2dpbkxhYmVsLmRhdGFzZXQudmFsaWRpdHlNc2cgPSBcIlwiO1xyXG4gICAgICB0aGlzLmxvZ2luTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNzcy5pbnZhbGlkVGl0bGUpO1xyXG4gICAgICB0aGlzLmxvZ2luSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNzcy5pbnZhbGlkRmllbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJpbmQgZnVuY3Rpb25zIHRvIExvZ2luV2luZG93IGNsYXNzXHJcbiAgICBsZXQgc2hvd1dhcm5pbmcgPSBhZGRWYWxpZGl0eVdhcm5pbmcuYmluZCh0aGlzKTtcclxuICAgIGxldCByZW1vdmVXYXJuaW5nID0gcmVtb3ZlVmFsaWRpdHlXYXJuaW5nLmJpbmQodGhpcyk7XHJcbiAgICBcclxuXHJcbiAgICBsZXQgdmFsaWRpdHkgPSB0aGlzLmxvZ2luSW5wdXQudmFsaWRpdHk7XHJcbiAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMubG9naW5JbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgIHNob3dXYXJuaW5nKHRoaXMuZm9ybU1lc3NhZ2VzLmVtcHR5RmllbGQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBsb2dpbiB0byBtYXRjaCB0aGUgc2VsZWN0ZWQgY2hhcmFjdGVycyBcclxuICAgIGlmIChpbnB1dFZhbHVlLm1hdGNoKC9bXlxcZFxcd1xcc1xcLVxcJ10rL2kpKSB7XHJcbiAgICAgIHNob3dXYXJuaW5nKHRoaXMuZm9ybU1lc3NhZ2VzLmludmFsaWRDaGFyYWN0ZXIpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsb2dpbiBtdXN0IGNvbnNpc3Qgb2Ygbm90IG9ubHkgd2l0aCBudW1iZXJzXHJcbiAgICBpZiAoIWlucHV0VmFsdWUubWF0Y2goL1teXFxkXS9pZykpIHtcclxuICAgICAgc2hvd1dhcm5pbmcodGhpcy5mb3JtTWVzc2FnZXMubnVtYmVyTG9naW4pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBhbGwgdmFsaWRpdHkgY2hlY2tpbmcgc3RhZ2VzIGFyZSBwYXNzZWQgcmVtb3ZlIHdhcm5pbmcgaGlnaGxpZ2h0aW5nXHJcbiAgICByZW1vdmVXYXJuaW5nKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjaGVja1Bhc3N3b3JkVmFsaWRpdHkoKSB7XHJcblxyXG4gICAgLy8gZnVuY3Rpb25zIGZvciBoaWdobGlnaHRpbmcgdGhlIGlucHV0IGZpZWxkIGFuZCBsYWJlbCBkZXNjcmlwdGlvblxyXG4gICAgZnVuY3Rpb24gYWRkVmFsaWRpdHlXYXJuaW5nKG1zZykge1xyXG4gICAgICB0aGlzLnBhc3N3b3JkTGFiZWwuZGF0YXNldC52YWxpZGl0eU1zZyA9IG1zZztcclxuICAgICAgdGhpcy5wYXNzd29yZExhYmVsLmNsYXNzTGlzdC5hZGQodGhpcy5jc3MuaW52YWxpZFRpdGxlKTtcclxuICAgICAgdGhpcy5wYXNzd29yZElucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5jc3MuaW52YWxpZEZpZWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVWYWxpZGl0eVdhcm5pbmcoKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmRMYWJlbC5kYXRhc2V0LnZhbGlkaXR5TXNnID0gXCJcIjtcclxuICAgICAgdGhpcy5wYXNzd29yZExhYmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jc3MuaW52YWxpZFRpdGxlKTtcclxuICAgICAgdGhpcy5wYXNzd29yZElucHV0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jc3MuaW52YWxpZEZpZWxkKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gYmluZCBmdW5jdGlvbnMgdG8gTG9naW5XaW5kb3cgY2xhc3NcclxuICAgIGxldCBzaG93V2FybmluZyA9IGFkZFZhbGlkaXR5V2FybmluZy5iaW5kKHRoaXMpO1xyXG4gICAgbGV0IHJlbW92ZVdhcm5pbmcgPSByZW1vdmVWYWxpZGl0eVdhcm5pbmcuYmluZCh0aGlzKTtcclxuXHJcbiAgICBsZXQgdmFsaWRpdHkgPSB0aGlzLnBhc3N3b3JkSW5wdXQudmFsaWRpdHk7XHJcbiAgICBsZXQgaW5wdXRWYWx1ZSA9IHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBpZiAodmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgIHNob3dXYXJuaW5nKHRoaXMuZm9ybU1lc3NhZ2VzLmVtcHR5RmllbGQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgICAgc2hvd1dhcm5pbmcodGhpcy5mb3JtTWVzc2FnZXMuc2hvcnRQYXNzd29yZClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgYWxsIHZhbGlkaXR5IGNoZWNraW5nIHN0YWdlcyBhcmUgcGFzc2VkIHJlbW92ZSB3YXJuaW5nIGhpZ2hsaWdodGluZ1xyXG4gICAgcmVtb3ZlV2FybmluZygpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgY2hlY2tGb3JtVmFsaWRpdHkoZSkge1xyXG5cclxuICAgIC8vIGN1c3RvbSB2YWxpZGF0aW9uXHJcbiAgICBsZXQgdmFsaWRhdGlvblN0YXR1cyA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICB2YWxpZGF0aW9uU3RhdHVzID0gdGhpcy5jaGVja0xvZ2luVmFsaWRpdHkoKTtcclxuICAgIHZhbGlkYXRpb25TdGF0dXMgPSB0aGlzLmNoZWNrUGFzc3dvcmRWYWxpZGl0eSgpXHJcbiAgICBcclxuICAgIC8vIGlmIGZvcm0gZG9lc24ndCBwYXNzZWQgdmFsaWRhdGlvbiBjaGVja2luZyAtIHJldHVyblxyXG4gICAgLy8gYWxzbyBjYW5jZWwgZm9ybSBzZW5kaW5nXHJcbiAgICBpZiAodmFsaWRhdGlvblN0YXR1cykgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdChlKSB7XHJcbiAgICBcclxuICAgIGxldCBmb3JtQ2hpbGRyZW4gPSB0aGlzLmZvcm0uZWxlbWVudHM7XHJcblxyXG4gICAgLy8gY3JlYXRlIGFuIG9iamVjdCB3aGVyZSBrZXk9aW5wdXQubmFtZSB2YWx1ZT1pbnB1dC52YWx1ZSBcclxuICAgIGxldCBmb3JtRGF0YSA9IHt9O1xyXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGZvcm1DaGlsZHJlbiwgKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcclxuICAgIH0pXHJcbiAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBmb3JtRGF0YVtpdGVtW1wibmFtZVwiXV0gPSBpdGVtLnZhbHVlO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyB0aGVyZSBjYW4gYmUgQUpBWCByZXF1ZXN0IGZ1bmN0aW9uIHRvIHRoZSBzZXJ2ZXJcclxuICAgIC8vIGJ1dCBkdWUgdG8gdGVjaG5pY2FsIHRhc2sgd2UganVzdCB3cml0ZSBkYXRhIHRvIHNlc3Npb25TdG9yYWdlXHJcbiAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlW2tleV0gPSBmb3JtRGF0YVtrZXldO1xyXG4gICAgfSlcclxuICAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgfVxyXG59IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArICgobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19faGVhZGVyL2xvZ2luLXdpbmRvd19faGVhZGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJsb2dpbi13aW5kb3dfX3NvY2lhbC1hbmQtZm9ybS13cmFwcGVyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vX19zb2NpYWwvbG9naW4td2luZG93X19zb2NpYWwucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19fZm9ybS1jb250YWluZXIvbG9naW4td2luZG93X19mb3JtLWNvbnRhaW5lci5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL19fZm9vdGVyL2xvZ2luLXdpbmRvd19fZm9vdGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApKTs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsImltcG9ydCBcIi4vbWFpbi5zdHlsXCI7XHJcbmltcG9ydCBMb2dpbldpbmRvdyBmcm9tIFwiLi9sb2dpbi13aW5kb3dcIjtcclxuXHJcbmxldCBsb2dpbldpbmRvd0hUTUwgPSBuZXcgTG9naW5XaW5kb3coKTtcclxuXHJcbi8vIHVzZSBib2R5IGFzIGEgcGFyZW50IGJsb2NrXHJcbi8vIGxvZ2luLXdpbmRvdyBwb3NpdGlvbiB3aWxsIGJlIHNldCBhcyBpdCBpcyB0aGUgbWFpbi13aW5kb3cgZWxlbWVudFxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwiYm9keVwiO1xyXG5sZXQgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxubWFpblNlY3Rpb24uY2xhc3NOYW1lID0gXCJtYWluLXdpbmRvd1wiO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKVxyXG5cclxuLy8gY2hlY2tpbmcgdGhlIGF2YWlsYWJpbGl0eSBvZiBsb2dpbiBpbiBsb2NhbFN0b3JhZ2VcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGxvZ2luID0gc2Vzc2lvblN0b3JhZ2UubG9naW47XHJcblxyXG4gIGlmIChsb2dpbikge1xyXG4gICAgbGV0IGdyZWV0aW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdyZWV0aW5nRGl2LmNsYXNzTmFtZSA9IFwiZ3JlZXRpbmdcIjtcclxuICAgIGdyZWV0aW5nRGl2LmlubmVyVGV4dCA9IGBIZWxsbyAke2xvZ2lufSFgO1xyXG4gICAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoZ3JlZXRpbmdEaXYpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpbnNlcnQgbG9naW4td2luZG93IHRlbXBsYXRlXHJcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChsb2dpbldpbmRvd0hUTUwuZWxlbSk7XHJcbiAgfVxyXG59KVxyXG5cclxuXHJcblxyXG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInBpY3MvaWNvbnMvZmFjZWJvb2stbG9nby5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJwaWNzL2ljb25zL2dvb2dsZS1wbHVzLnN2Z1wiOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=