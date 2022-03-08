class TrafficLight {
    #r;
    #y;
    #g;
  
    constructor(r, y, g){
      this.#r = r;
      this.#y = y;
      this.#g = g;
    }
  
    get r() {
      return this.#r;
    }
  
    get y() {
      return this.#y;
    }
  
    get g() {
      return this.#g;
    }

    toObject() {
      return {
        R: this.#r,
        Y: this.#y,
        G: this.#g
      };
    }

}

class Status {
  static STARTED = new Status("started");
  static STOPPED = new Status("stopped");
  static STANDBY = new Status("standby");
  
  #name;
  
  constructor(name) {
    this.#name = name;
  }
  
  get name() {
    return this.#name;
  }
}

class State {
  #timestamp;
  #state;

  constructor(channels, cycle) {
    this.#timestamp = this.#getTimestamp();
    this.#state = this.#getState(channels, cycle);
  }

  get timestamp() {
    return this.#timestamp;
  }

  get state() {
    return this.#state;
  }

  #getState(channels, cycle) {
    const state = new Map();

    for (const [key, value] of channels.entries()) {
      value.trafficLights.forEach(trafficLight => {
        state.set(trafficLight, cycle.get(key))
      })
    }

    return state;
  }

  #getTimestamp() {
    const now = new Date();
    return `${now.toLocaleDateString("fr-CA")} ${now.toLocaleTimeString("fr-FR")}`;
  }

  toObject() {
    const obj = {
      timestamp: this.#timestamp,
      state: {}
    };

    for (const [key, value] of this.#state.entries()) {
      obj.state[key] = value.toObject();
    }
    return obj;

  }

}

module.exports = { TrafficLight, Status, State };