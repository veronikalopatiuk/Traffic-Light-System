class Observable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyAll(message) {
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update(message));
    }
  }
}

class Timer extends Observable {
  constructor() {
    super();
    this.timerId = null;
  }

  async startTimer(seconds) {
    return new Promise((resolve, reject) => {
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          this.notifyAll("hi");
        }, seconds * 1000);
        resolve();
      }
    });
  }

  async startCountDown(seconds) {
    return new Promise((resolve, reject) => {
      if (this.timerId === null) {
        this.timerId = setTimeout(() => {
          this.notifyAll("hello");
          this.stop();
          resolve();
        }, seconds * 1000);
      }
    });
  }

  stop() {
    clearInterval(this.timerId);
    clearTimeout(this.timerId);
    this.timerId = null;
  }
}

class Controller {
  #config;

    constructor() {
        this.channels = new Map();
        this.#config = require("./config.json");

        for (const [key, value] of Object.entries(this.config.channels)) {
          const {name, trafficLights} = value;
          this.channels.set(key, new Channel(name, trafficLights))
        }

    }

    update(message) {
        const now = new Date();
        const dateTimeFormatted = `${now.toLocaleDateString("fr-CA")} ${now.toLocaleTimeString("fr-FR")}`
        console.log(`${dateTimeFormatted}: ${message}`);
    }
}

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

const controller = new Controller();

const client = new Controller();
const subject = new Timer();
subject.addObserver(client);

(async () => {
  try {
    const message = "started running...";
    const now = new Date();
    const dateTimeFormatted = `${now.toLocaleDateString("fr-CA")} ${now.toLocaleTimeString("fr-FR")}`
    console.log(`${dateTimeFormatted}: ${message}`);

    await subject.startCountDown(5);
    await subject.startTimer(1);
  } catch (error) {
    console.error(error);
  }
})();

// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format
