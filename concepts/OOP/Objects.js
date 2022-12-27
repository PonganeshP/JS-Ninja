function StopWatch() {
  let startTime,
    endTime,
    running,
    duration = 0; //Closures used for Abstraction
  this.start = function () {
    if (running) throw new Error("Already Running !!");
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) throw new Error("Please start a Stopwatch to stop it !!");
    endTime = new Date();
    running = false;
    duration += endTime.getSeconds() - startTime.getSeconds();
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();

// new will create an object {}
