const { Buffer } = require("buffer");

const b = Buffer.from("abcdef");

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.indexOf(99.9));
console.log(b.indexOf(256 + 99));

// Passing a byteOffset that coerces to NaN or 0.
// Prints: 1, searching the whole buffer.
console.log(b.indexOf("b", undefined));
console.log(b.indexOf("b", {}));
console.log(b.indexOf("b", null));
console.log(b.indexOf("b", []));
