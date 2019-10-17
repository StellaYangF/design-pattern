class Person{
  dinner(){
      this.buy();
      this.cook();
      this.eat();
  }
  buy(){
      throw new Error('必须由子类实现!');
  }
  cook(){
      throw new Error('必须由子类实现!');
  }
  eat(){
      throw new Error('必须由子类实现!');
  }
}
class Jiang extends Person{
  buy(){
     console.log('买黄瓜');
  }
  cook(){
      console.log('拍黄瓜');
  }
  eat(){
      console.log('吃拍黄瓜');
  }
}
let j = new Jiang();
j.dinner();