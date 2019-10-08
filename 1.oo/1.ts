class Person {
  public name: string;
  protected age: number;
  private money: number;

  constructor (name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }
}

class Student extends Person {
  public num: number;

  constructor (name: string, age: number, money: number, num: number) {
    super(name, age, money);
    this.num = num;
  }

  getName () {
    console.log(`My name is ${this.name}.`);
  }z

  getAge () {
    console.log(`I am ${this.age} years old.`)
  }

  getMoney () {
    // console.log(`I have ${this.money}.`);
    // Property 'money' is private and only accessible within class 'Person'.
  }
}

let s1 = new Student("Tom", 3, 100, 1);
console.log(s1.name);

// s1.age
// Property 'age' is protected and only accessible within class 'Person' and its subclasses.