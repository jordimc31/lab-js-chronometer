class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    if (this.currentTime == 0) return 0;
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    let twoDigitString = ("0" + value).slice(-2);

    return twoDigitString;
  }

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let seconds = this.getSeconds();
    let minutes = this.getMinutes();

    seconds = this.computeTwoDigitNumber(seconds);
    minutes = this.computeTwoDigitNumber(minutes);

    let stringToReturn = "" + minutes + ":" + seconds;

    return stringToReturn;
  }
}
