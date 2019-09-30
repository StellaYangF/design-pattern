function request( url, options ) {
  fetch(url, options)
    .then(checkStatus)
    .then(checkCode)
    .then(parseJSON)
}

function checkStatus (response) {
  if (response.status>= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error ("响应结果不正确")
  }
}

function checkCode (response) {
  if (response.code == 0 ) {
    return response;
  } else {
    throw new Error("响应结果不正确")
  }
}

function parseJSON (response) {
  return response.json();
}