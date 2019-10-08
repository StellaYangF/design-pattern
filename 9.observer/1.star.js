class Star{
  constructor(name) {
    this.name = name;
    this.state = "";
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notifyAllObservers() {
    this.observers && this.observers.forEach(observer => observer.update());
  }
}

class Fan{
  constructor(name, star) {
    this.name = name;
    this.star = star;
    this.star.attach(this);
  }

  update() {
    console.log(`My idol likes ${this.star.getState()}, me too.`);
  }
}

let star = new Star("Tylor Swift");
let f1 = new Fan("Eva", star);
star.setState("Green");
star.setState("reading")