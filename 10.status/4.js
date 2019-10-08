class StateMachine{
  constructor(options) {
    let { init = "", transitions = [], methods = {} } = options;
    this.state = init;
    transitions.forEach(transition => {
      let { from, to, name } = transition;
      this[name]= () => {
        if(this.state === from) {
          this.state = to;
          let onMethod = "on" + name.slice(0,1).toUpperCase() + name.slice(1);
          methods[onMethod] &&  methods[onMethod]();
        }
      }
    })
  }
}

let fsm = new StateMachine({
  init: "solid",
  transitions: [
    { from: "solid", to: "liquid", name: "melt" },
    { from: "liquid", to: "solid", name: "freeze" },
    { from: "liquid", to: "gas", name: "vaporize" },
    { from: "gas", to: "liquid", name: "condense" },
  ],
  methods: {
    onMelt() { console.log("onMelt") },
    onFreeze() { console.log("onFreeze") },
    onVaporize() { console.log("onVaporize") },
    onCondense() { console.log("onCondense") },
  }
})

fsm.melt();
fsm.freeze();