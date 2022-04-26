const { Buffer } = require("buffer");

const buf = Buffer.from("this buffer is a buffer");

console.log(buf.lastIndexOf("this"));
// Prints: 0
console.log(buf.lastIndexOf("buffer"));
// Prints: 17
console.log(buf.lastIndexOf(Buffer.from("buffer")));
// Prints: 17
console.log(buf.lastIndexOf(97));
// Prints: 15 (97 is the decimal ASCII value for 'a')
console.log(buf.lastIndexOf(Buffer.from("yolo")));
// Prints: -1
console.log(buf.lastIndexOf("buffer", 5));
// Prints: 5
console.log(buf.lastIndexOf("buffer", 4));
// Prints: -1

const utf16Buffer = Buffer.from("\u039a\u0391\u03a3\u03a3\u0395", "utf16le");

console.log(utf16Buffer.lastIndexOf("\u03a3", undefined, "utf16le"));
// Prints: 6
console.log(utf16Buffer.lastIndexOf("\u03a3", -5, "utf16le"));
// Prints: 4
