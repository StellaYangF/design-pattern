class Sum{
  sum (a, b) {
    console.log("a + b =", a + b);
  }
}
class Minus{
  minus (a, b) {
    console.log("a - b =", a - b);
  }
}
class Multiply{
  multiply (a, b) {
    console.log("a * b =", a * b);
  }
}
class Divide{
  divide (a, b) {
    console.log("a / b =", a / b);
  }
}
class Caculator{
  constructor() {
    this.sumObj = new Sum();
    this.minusObj = new Minus();
    this.multiplyObj = new Multiply();
    this.divideObj = new Divide();
  }
  sum(a,b) {
    this.sumObj.sum(a,b);
  }
  minus(a,b) {
    this.minusObj.minus(a,b);
  }
  multiply(a,b) {
    this.multiplyObj.multiply(a,b);
  }
  divide(a,b){
    this.divideObj.divide(a,b);
  }
}

let c = new Caculator();
c.sum(3, 2);
c.minus(3, 2);
c.multiply(3, 2);
c.divide(3, 2);