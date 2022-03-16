const { once, EventEmitter } = require("events");

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit("myevent", 42);
  });

  const [value] = await once(ee, "myevent");

  console.log(value);

  const err = new Error("kaboom");

  process.nextTick(() => {
    ee.emit("error", err);
  });

  once(ee, "error")
    .then(([err]) => console.log("ok", err.message))
    .catch((err) => console.log("error", err.message));
  try {
    await once(ee, "myevent");
  } catch (err) {
    console.log("error happened", err);
  }
}

run();
