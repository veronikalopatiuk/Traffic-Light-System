const { TrafficLight, Status } = require("./Model");
 
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
}

class Controller {
  #config;

  constructor() {
      this.channels = new Map();
      this.program = null;
      this.#config = require("../config.json");
      this.loadChannels();
      this.loadProgram();
      
      this.status = Status.STOPPED;
  }

  update(message) {
      const now = new Date();
      const dateTimeFormatted = `${now.toLocaleDateString("fr-CA")} ${now.toLocaleTimeString("fr-FR")}`
      console.log(`${dateTimeFormatted}: ${message}`);
  }

  loadChannels() {
    for (const [key, value] of Object.entries(this.#config.channels)) {
      const {name, trafficLights} = value;
      this.channels.set(key, new Channel(name, trafficLights))
    }
  }

  loadProgram() {
    const length = this.#config.program.length;
    const cycle = new Map();

    for (const [key, value] of Object.entries(this.#config.program.cycle)) {
      const trafficLights = [];
      for(let i = 0; i < length; i++) {
        trafficLights.push(new TrafficLight(value.R[i], value.Y[i], value.G[i]));
      }
      cycle.set(key, trafficLights);
    }

    this.program = new Program(length, cycle);
  }

}

module.exports = { Controller, Program, Channel };