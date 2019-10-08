class Battery{
  constructor(amount) {
    this.amount = "high"
  }
  show() {
    if(this.amount === "high") {
      console.log("Green");
      this.amount = "middle";
    }else if(this.amount === "middle") {
      console.log("Orange");
      this.amount = "low";
    }else if(this.amount === "low") {
      console.log("Red");
    }
  }
}

let b = new Battery();
b.show();
b.show();
b.show();