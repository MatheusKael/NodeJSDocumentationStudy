const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", (a, b) => {
  setImmediate(() => {
    console.log("this happens asynchronously");
  });
});

myEmitter.on("event", () => {
  console.log("an event occurred!");
});

myEmitter.emit("event");
