// 模板模式

// 类似于继承
class Person {
  dinner() {
    this.buy();
    this.cook();
    this.eat();
  }

  buy() { throw new Error("必须由子类实现")}
  cook() { throw new Error("必须由子类实现")}
  eat() { throw new Error("必须由子类实现")}
}

class Student extends Person{
  buy() { console.log('Buy cucumber') };
  cook() { console.log('Cook cucumber') };
  eat() { console.log('Eat cucumber') };
}

let s = new Student();
s.dinner();