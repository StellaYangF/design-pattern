class SuccessState{
  show() {
    console.log("Green")
  }
}
class WarningState{
  show() {
    console.log("Orange")
  }
}
class ErrorState{
  show() {
    console.log("Red")
  }
}
class Battery{
  constructor(){
    this.amount = "high"
    this.state = new SuccessState();
  }
  show() {
    this.state.show();
    if(this.amount === "high") {
      this.amount = "middle";
      this.state = new WarningState();
    }else if(this.amount === "middle") {
      this.amount = "low";
      this.state = new ErrorState();
    }
  }
}

let b = new Battery();
b.show();
b.show();
b.show();