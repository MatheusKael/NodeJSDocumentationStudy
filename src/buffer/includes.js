const { Buffer } = require("buffer");

const buf = Buffer.from("this is a buffer");

console.log(buf.includes("this"));
// Prints: true
console.log(buf.includes("is"));
// Prints: true
console.log(buf.includes(Buffer.from("a buffer")));
// Prints: true
console.log(buf.includes(97));
// Prints: true (97 is the decimal ASCII value for 'a')
console.log(buf.includes(Buffer.from("a buffer example")));
// Prints: false
console.log(buf.includes(Buffer.from("a buffer example").slice(0, 8)));
// Prints: true
console.log(buf.includes("this", 4));
// Prints: false
