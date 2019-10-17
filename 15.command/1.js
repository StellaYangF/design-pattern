// 命令模式 command

class Cook {
  cook() {
    console.log("cook!");
  }
}

class Cleaner {
  clean() {
    console.log("clean!");
  }
}

class CookCommand{
  constructor(receiver) {
    this.receiver = receiver;
  }
  excute() {
    this.receiver.cook();
  }
}

class CleanCommand{
  constructor(receiver) {
    this.receiver = receiver;
  }
  excute() {
    this.receiver.clean();
  }
}

class Customer {
  constructor(command) {
    this.command = command;
  }

  setCommand(command) {
    this.command = command;
  }
  cook() {
    this.command.excute();
  }
  clean() {
    this.command.excute();
  }
}

let cook = new Cook();
let cleaner = new Cleaner();
let cookCommand = new CookCommand(cook);
let cleanerCommand = new CleanCommand(cleaner);

let customer = new Customer(cookCommand);
customer.cook();
customer.setCommand(cleanerCommand);
customer.clean();