class Agent{
  constructor() {
    this._events = {};
  }

  subscribe(type, listener) {
    let listeners = this._events[type];
    if(listeners) listeners.push(listener) 
    else this._events[type] = [ listener ];
  }

  publish(type) {
    let listeners = this._events[type];
    let args = Array.prototype.slice.call(arguments, 1);
    listeners && listeners.forEach(listener => listener(...args));
  }
}

class LandLord {
  constructor(name) {
    this.name = name;
  }

  lend(agent, area, money) {
    agent.publish("house", area, money);
  }
}

class Tenant{
  constructor(name) {
    this.name = name;
  }
  rend(agent) {
    agent.subscribe("house", (area, money) => {
      console.log(`${this.name} sees the agent's house information: ${area} square meters, rent ¥${money}.`);
    })
  }
}

let agent = new Agent();
let t1 = new Tenant("Tom");
let t2 = new Tenant("Lily");

t1.rend(agent);
t2.rend(agent);

let landLord = new LandLord("Jerry");
landLord.lend(agent, 60, 5000);
