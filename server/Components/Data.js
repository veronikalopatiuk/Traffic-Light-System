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

module.exports = TrafficLight;