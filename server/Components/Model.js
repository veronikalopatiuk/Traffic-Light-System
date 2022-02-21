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

module.exports = { TrafficLight, Status };