class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(()=>{
      this.currentTime++;

      if(printTimeCallback){
        printTimeCallback();
      }     
    },1000);

  }

  getMinutes() {
    let minutes = Math.floor(60 / currentTime)
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {

  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
  
}