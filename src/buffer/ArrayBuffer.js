const { Buffer } = require("buffer");

const arrayBuffer = new ArrayBuffer(16);
const buffer = Buffer.from(arrayBuffer);

console.log(arrayBuffer);
console.log(buffer.buffer);
console.log(buffer.buffer === arrayBuffer);
// Prints: true
