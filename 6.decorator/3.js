/**
 * AOP: Aspect Oriented Programming
 * 面向切片编程，就是在函数执行前或后，添加一些额外的逻辑，而不需要修改函数的功能
*/ 
Function.prototype.before = function (beforeFn) {
  return (...args) => {
    beforeFn(...args);
    this(...args);
  }
}

Function.prototype.after = function (afterFn) {
  return (...args) => {
    this(...args);
    afterFn(...args);
  }
}

function buy(money, goods) {
  console.log(`Pay ${money} for ${goods}.`)
}

buy = buy.before(() => {
  console.log("Apply one RMB from Wife.")
})
buy = buy.after(() => {
  console.log("Return .2 RMB to Wife.")
})
buy(0.8, "salt");