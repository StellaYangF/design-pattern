// Single Responsibility Principle
// 一个程序制作好一件事
// 如果功能特别复杂 就进行拆分
function check() {
  let form = document.getElementById("userform"),
      inputs = form.getElementsByTagName("input");
  for (let i = 0; i< inputs.length; i++) {
    let validate = inputs[i].dataset.validate;
    let validateFn = window[validate];
    if (validate) {
      let error = validateFn(inputs[i]);
      if (error) {
        return alert(error);
      }
    }
  }
}

function checkUsername(input) {
  let val = input.value;
  if (val.length < 6 || val.length > 12) {
    return "用户名不合法";
  }
}

function checkEmail(input) {
  let val = input.value;
  if (!val.includes("@")) {
     return "邮箱不合法";
  }
}

function checkPassword(input) {
  let val = input.value;
  if (val.length < 6){
    return "密码不合法"
  }
}