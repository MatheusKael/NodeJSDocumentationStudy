const { Buffer } = require("buffer");

const buf = Buffer.from("this is a buffer");

console.log(buf.indexOf("this"));
// Prints: 0
console.log(buf.indexOf("is"));
// Prints: 2
console.log(buf.indexOf(Buffer.from("a buffer")));
// Prints: 8
console.log(buf.indexOf(97));
// Prints: 8 (97 is the decimal ASCII value for 'a')
console.log(buf.indexOf(Buffer.from("a buffer example")));
// Prints: -1
console.log(buf.indexOf(Buffer.from("a buffer example").slice(0, 8)));
// Prints: 8

const utf16Buffer = Buffer.from("\u039a\u0391\u03a3\u03a3\u0395", "utf16le");

console.log(utf16Buffer.indexOf("\u03a3", 0, "utf16le"));
// Prints: 4
console.log(utf16Buffer.indexOf("\u03a3", -4, "utf16le"));
// Prints: 6
