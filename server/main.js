const {Controller} = require("./Components/TrafficController");
const Timer = require("./Components/Timer");

const controller = new Controller();
controller.getState();

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
