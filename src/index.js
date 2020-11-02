
import refs from "./refs.js"


class CountdownTimer {
  constructor(targetDate = new Date()) {
    this._selector = "#timer-1";
    this._targetDate = targetDate;
  }
  get selector(){
    return this._selector;
  }
  set selector(value){
    return this._selector = value;
  }
  get targetDate(){
    return this._targetDate;
  }
  set targetDate(value){
    return this._targetDate = value;
  }
  onTimer() {
    this.updateClockface(this.targetDate - Date.now());
    setInterval(() => {
      this.updateClockface(this.targetDate - Date.now());
    }, 1000);
  }
  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}
let timer = new CountdownTimer(new Date("dec 31, 2020"));
  timer.onTimer();
