/**
 * 串行连续的读取三个文件的内容
 */
const fs = require("fs");
let { resolve } = require("path") ;
function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if(err) reject(err);
        else resolve(data)
      })
    })
  }
}

let readFile = promisify(fs.readFile);
(async () => {
  let one = await readFile(resolve(__dirname, "./1.txt"), "utf8");
  let two = await readFile(resolve(__dirname, "./2.txt"), "utf8");
  let three = await readFile(resolve(__dirname, "./3.txt"), "utf8");
  console.log(one, two, three);
})()