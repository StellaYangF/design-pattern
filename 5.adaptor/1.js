class Power {
  charge(){
    return '220v';
  }
}

class Adaptor {
  constructor() {
    this.power = new Power();
  }
  charge() {
    let v = this.power.charge();
    return `${v} => 12v`;
  }
}

class NotePad {
  constructor() {
    this.adaptor = new Adaptor();
  }
  use() {
    let v = this.adaptor.charge();
    console.log(v);
  }
}

let client = new NotePad();
client.use();