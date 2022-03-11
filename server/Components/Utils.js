class Logger {
  
  static #getDateTime() {
    const now = new Date();
    return `${now.toLocaleDateString("fr-CA")} ${now.toLocaleTimeString("fr-FR")}`;
  }

  static log(message) {
    console.log(`${Logger.#getDateTime()} [LOG]: ${message}`);
  }

  static error(message) {
    console.error(`${Logger.#getDateTime()} [ERR]: ${message}`);
  }

  static info(message) {
    console.info(`${Logger.#getDateTime()} [INF]: ${message}`);
  }

  static warning(message) {
    console.warn(`${Logger.#getDateTime()} [WRN]: ${message}`);
  } 
}

module.exports = { Logger };