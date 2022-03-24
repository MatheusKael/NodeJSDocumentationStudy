const { Buffer } = require("buffer");

Buffer.isBuffer(Buffer.alloc(10)); // true
Buffer.isBuffer(Buffer.from("foo")); // true
Buffer.isBuffer("a string"); // false
Buffer.isBuffer([]); // false
Buffer.isBuffer(new Uint8Array(1024)); // false
