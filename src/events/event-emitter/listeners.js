const util = require(`util`);
const EventEmitter = require("events");

class Server extends EventEmitter {}

const server = new Server();

server.on("connection", function list(stream) {
  console.log("someone connected!");
});
console.log(util.inspect(server.listeners("connection")));
// Prints: [ [Function] ]
