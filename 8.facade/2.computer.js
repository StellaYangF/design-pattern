class CPU{
  start() {
    console.log("Start CPU");
  }
}
class Screen{
  start() {
    console.log("Start Screen");
  }
}
class Memory{
  start() {
    console.log("Start Memory");
  }
}
class HardDisc{
  start() {
    console.log("Start HardDisc");
  }
}
class Computer{
  constructor() {
    this.cpu = new CPU();
    this.screen = new Screen();
    this.memory = new Memory();
    this.hardDisc = new HardDisc();
  }
  start() {
    this.cpu.start();
    this.screen.start();
    this.memory.start();
    this.hardDisc.start();
  }
}

let lapTop = new Computer();
lapTop.start();