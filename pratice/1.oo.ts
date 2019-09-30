class Human {
  public name: string
  protected age: number
  private money: number

  constructor(name: string, age: number, money: number) {
    this.name = name
    this.age = age 
    this.money = money
  }
}

class Man extends Human {
  public num: number
  constructor (name:string, age: number, money: number, num: number) {
    super(name, age, money)
    this.num = num
  }

  getName () {
    return this.name
  }

  getAge () {
    return this.age
  }

  getMoney () {
    return this.money
  }
}

let m = new Man("tom", 18, 100, 10);
m.name
m.age
m.getAge()
m.getMoney()