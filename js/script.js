var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var inputForm = document.querySelector("form");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (username.value.trim() == "") {
    err(username, "Username can't be empty !");
  } else {
    success(username);
  }
  if (password.value.trim() == "") {
    err(password, "Password can't be empty !");
  } else if (password.value.length >= 4 && password.value.length <= 10) {
    success(password);
  } else {
    big(password, "Password must be at least 4 and less than 10 charaters");
  }
});

function err(element, msg) {
  element.style.border = "3px red solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  p.textContent = msg;
  p.style.visibility = "visible";
  inputForm.style.border = "1px red solid";
  const dparent = parent.parentElement;
  dparent.style.border = "4px red solid";
  submit.style.border = "4px red solid";
}

function success(element) {
  element.style.border = "3px green solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  p.style.visibility = "hidden";
  const dparent = parent.parentElement;
  dparent.style.border = "4px green solid";
  submit.style.border = "4px green solid";
}

function big(element, msg) {
  element.style.border = "3px red solid";
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  p.textContent = msg;
  p.style.visibility = "visible";
  const dparent = parent.parentElement;
  dparent.style.border = "4px red solid";
  submit.style.border = "4px red solid";
}
