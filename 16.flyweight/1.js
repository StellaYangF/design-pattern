// 享元模式

// 共享内存，节约内存空间
// 相同的数据共享使用
// 主要还是对数据、方法共享分离，将数据的方法分为内部数据、内部方法和外部数据、外部方法。
// 内部状态保存在对象内部，通常不会改变，可以共享
// 外部状态保存在对象外部，可以随场景改变，不可以共享。


class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  getName(){
    console.log(this.name);
    return this.name;
  }

  getAge(){
    console.log(this.age);
    return this.age;
  }
}

let p1, p2, p3;

p1 = new  Person("p1", 1);
p2 = new  Person("p2", 2);
p3 = new  Person("p3", 3);
p1.getAge();
p2.getAge();
p3.getAge();