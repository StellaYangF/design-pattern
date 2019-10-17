class A {
  constructor(name) {
    this.name = name;
  }
  fire(){console.log('fire')};
}

A.prototype.dd = function(){
  console.log('dd');
}

let a = new A("a");
// a.dd();

class B {
  work() {console.log('B work')};
}

// B.prototype = Object.create(A.prototype);   // 无法修改，B.prototype是不可写的
Object.getOwnPropertyDescriptor(B, "prototype");
// configurable: false
// enumerable: false
// value:
  // constructor: class B
  // work: ƒ work()
  // __proto__: Object
// writable: false
// __proto__: Object

Object.setPrototypeOf(B.prototype, A.prototype);
// 或者
B.prototype.__proto__ = A.prototype;
// configurable: false
// enumerable: false
// value: A
  // constructor: class B
  // work: ƒ work()
  // __proto__: Object
// writable: false
// __proto__: Object

let b = new B();
b.work();