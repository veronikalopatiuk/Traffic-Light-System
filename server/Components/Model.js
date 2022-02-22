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
    this.#state = this.#setState();
  }

  get timestamp() {
    return this.#timestamp;
  }

  get state() {
    return this.#state;
  }

  #setState() {
    return new Map();
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
      obj.state[key] = value;
    }
    
    return obj;

  }

}

module.exports = { TrafficLight, Status, State };