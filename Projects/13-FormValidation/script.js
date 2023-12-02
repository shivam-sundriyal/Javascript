const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue = passwordCheck.value.trim();

  if (usernameValue === "") {
    setError(username, "Username cannot be empty");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setError(email, "Enter a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }

  if (passwordCheckValue === "") {
    setError(passwordCheck, "Password Check cannot be empty");
  } else if (passwordValue != passwordCheckValue) {
    setError(passwordCheck, "Password Doesn't Match");
  } else {
    setSuccess(passwordCheck);
  }
}

function setError(input, message) {
  const controlForm = input.parentElement;
  const small = controlForm.querySelector(".error");
  controlForm.className = "control-form fail";
  small.innerText = message;
}

function setSuccess(input) {
  const controlForm = input.parentElement;
  controlForm.className = "control-form success";
}

function isEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
