const {Controller} = require("./Components/TrafficController");
const Timer = require("./Components/Timer");
const { Status } = require("./Components/Model");
const { Logger } = require("./Components/Utils");

const controller = new Controller();
controller.getState();

const timer = new Timer();
timer.addObserver(controller);

(async () => {
  try {
    Logger.info("started running...");

    await timer.startCountDown(5);
    controller.status = Status.STARTED;
    await timer.startTimer(1);
  } catch (error) {
    console.error(error);
  }
})();

// https://stackoverflow.com/questions/27939773/tolocaledatestring-short-format
