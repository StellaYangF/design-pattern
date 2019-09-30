let submit = document.querySelector("#submit");
submit.onclick = check;

function check() {
  let form = document.querySelector("#userform"),
      inputs = form.querySelectorAll("input");

  inputs.forEach(input => {
    let validate = input.dataset.validate,
        validateFn = window[validate];
    let error = validateFn(input);
    if(error) {
      alert(error);
    }
  })
}

function checkUsername ({ value = "" }) {
  let length = value.trim().length;
  if (length < 6 || length > 12) return "Invalid username.";
}

function checkEmail ({ value = "" }) {
  if (!value.includes("@")) return "Invalid email."
}

function checkPassword ({ value = ""}) {
  let length = value.trim().length;
  if (length < 6 || length > 12) return "Invalid password."
}