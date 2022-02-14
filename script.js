class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyAll(message) {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer.update(message));
        }
    }

}

class Timer extends Observable {

    constructor() {
        super();
        this.timerId = null;
    }

    startTimer(seconds){
        if(this.timerId === null) {
            this.timerId = setInterval(() => {
                this.notifyAll("hi");
                this.stop();
            }, seconds * 1000)
        }
    }

    startCountDown(seconds) {
        if(this.timerId === null){
            this.timerId = setTimeout(() => {
                this.notifyAll("hello");
            }, seconds * 1000)
        }
    }

    stop() {
        clearInterval(this.timerId);
        clearTimeout(this.timerId);
        this.timerId = null;
    }

}

class DummyObserver {
    update(message) {
      console.log("i've got an update! " + message);
    }
}

const client = new DummyObserver();
const subject = new Timer();
subject.addObserver(client);
subject.startCountDown(5);
subject.startTimer(1);