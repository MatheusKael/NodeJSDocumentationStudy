const { EventEmitter } = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Using normal function
myEmitter.on("event", function (a, b) {
  console.log("Normal function output:");
  console.log(a, b, this, this === myEmitter);
});

// Using arrow function
myEmitter.on("event", (a, b) => {
  console.log("Arrow function output:");
  console.log(a, b, this);
});

myEmitter.emit("event", "a", "b");
