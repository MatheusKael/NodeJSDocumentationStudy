const { Buffer } = require("buffer");

// Returns a new Buffer that references the same memory as the original,
// but offset and cropped by the start and end indices.
// Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
// from the original `Buffer`.

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

const buf2 = buf1.subarray(0, 3);

console.log(buf2.toString("ascii", 0, buf2.length));
// Prints: abc

buf1[0] = 33;

console.log(buf2.toString("ascii", 0, buf2.length));
// Prints: !bc
