// Open Closed Principle
// 对扩展开放，对修改关闭
// 增加需求时，扩展新代码，而非修改已有代码
// 这是软件设计的中级目标


// src/utils/request.js
function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error("响应结果不正确");
  }
}

function checkCode(response) {
  if (response.code == 0) {
    return response;
  } else {
    throw new Error("响应结果不正确");
  }
}

function request(url, options) {
  /**
   * 1. 判断相应的状态码是不是2xx，如果不是的话也认为是错误
   * 2. 把响应体转成JSON对象
   */
  fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
}