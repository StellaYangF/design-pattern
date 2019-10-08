class Duck{
  constructor(name) {
    this.name = name;
  }

  eat (food) {
    console.log(`A ${this.name} eats ${food}.`);
  }
}

class TangDuck {
  constructor(name) {
    this.duck = new Duck(name);
  }

  eat(food) {
    this.duck.eat(food);
    console.log("Thank you!");
  }
}

let t = new TangDuck("Tang Duck");
t.eat("apples");
