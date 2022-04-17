const { Buffer } = require("buffer");

// Fill a `Buffer` with the ASCII character 'h'.

const b = Buffer.allocUnsafe(50).fill("h");

console.log(b.toString());
