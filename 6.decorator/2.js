class Coffee{
  make(water) {
    return `${water} + coffee`;
  }
  cost () {
    return 10;
  }
}
class MilkCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + milk`
  }
  cost() {
    return this.parent.cost() + 2;
  }
}

class SugarCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + sugar`
  }
  cost() {
    return this.parent.cost() + 3;
  }
}

let coffee = new Coffee();
let milkCoffee = new MilkCoffee(coffee);
let ret = milkCoffee.make("water");
let sugarCoffee = new SugarCoffee(milkCoffee);
let rett = sugarCoffee.make("water");
console.log(ret);
console.log(milkCoffee.cost());
console.log(rett);
console.log(sugarCoffee.cost());