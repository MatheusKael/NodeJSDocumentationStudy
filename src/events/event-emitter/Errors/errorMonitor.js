const { EventEmitter, errorMonitor } = require("events");

const myEmitter = new EventEmitter();
myEmitter.on(errorMonitor, (err) => {
  MyMonitoringTool.log(err);
});
myEmitter.emit("error", new Error("whoops!"));
// Still throws and crashes Node.js
