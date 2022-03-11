const { TrafficLight, Status, State } = require("./Model");
 
class Channel {
    #name;
    #trafficLights;
  
    constructor(name, trafficLights) {
      if(typeof name !== "string" || name === "") {
        throw Error("Name can't be an empty string!");
      }
  
      if(!Array.isArray(trafficLights)) {
        throw Error("Traffic lights must be an array!");
      }
      
      this.#name = name;
      this.#trafficLights = trafficLights;
    }
  
    get name() {
      return this.#name;
    }
  
    get trafficLights() {
      return this.#trafficLights;
    }
  
}
  
class Program {
    #length;
    #cycle;
  
    constructor(length, cycle) {
      this.#length = length;
      this.#cycle = cycle;
    }
  
    get length() {
      return this.#length;
    }
  
    get cycle() {
      return this.#cycle;
    }

    getCycle(i) {
      const cycle = new Map();
      for (const [key, value] of this.#cycle.entries()) {
        cycle.set(key, value[i]);
      }
      return cycle;
    }
}

class Controller {
  #config;
  #channels;
  #program;
  #status;

  constructor() {
    this.#config = require("../config.json");
    this.#channels = this.#loadChannels();
    this.#program = this.#loadProgram();
    this.cycleIndex = 0;
      
    this.#status = Status.STOPPED;
  }

  get status() {
    return this.#status;
  }

  set status(status) {
    if(Object.values(Status).includes(status)) {
      this.#status = status;
    } else {
      throw Error("`status` must be value of Status enum! Example: Status.STOPPED");
    }
  }

  get program() {
    return this.#program;
  }

  update() {
    this.cycleIndex = (this.cycleIndex + 1) % this.program.length;
  }

  #loadChannels() {
    const channels = new Map()
    for (const [key, value] of Object.entries(this.#config.channels)) {
      const {name, trafficLights} = value;
      channels.set(key, new Channel(name, trafficLights))
    }
    return channels;
  }

  #loadProgram() {
    const length = this.#config.program.length;
    const cycle = new Map();

    for (const [key, value] of Object.entries(this.#config.program.cycle)) {
      const trafficLights = [];
      for(let i = 0; i < length; i++) {
        trafficLights.push(new TrafficLight(value.R[i], value.Y[i], value.G[i]));
      }
      cycle.set(key, trafficLights);
    }
    return new Program(length, cycle);
  }

  getState() {
    return new State(this.#channels, this.#program.getCycle(this.cycleIndex));
  }

}

module.exports = { Controller, Program, Channel };