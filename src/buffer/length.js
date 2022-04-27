const { Buffer } = require("buffer");

// Create a `Buffer` and write a shorter string to it using UTF-8.

const buf = Buffer.alloc(1234);

console.log(buf.length);
// Prints: 1234

buf.write("some string", 0, "utf8");

console.log(buf.length);
// Prints: 1234
