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

module.exports = Timer;