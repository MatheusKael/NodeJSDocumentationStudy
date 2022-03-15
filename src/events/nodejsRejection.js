const { EventEmitter, captureRejectionSymbol } = require("events");

class MyClass extends EventEmitter {
  constructor() {
    super({ captureRejections: true });
  }

  [captureRejectionSymbol](err, event, ...args) {
    console.log("rejection happened for", event, "with args", args);
    this.destroy(err);
  }

  destroy(err) {}
}
