"use strict";
class Timer {
    constructor(timeInSeconds = 60) {
        this.h = 0;
        this.m = 0;
        this.s = 0;
        this.timerId = 0;
        this._running = true;
        this._counterString = "00:00:00";
        this._timeInSeconds = timeInSeconds;
        this.initTimer();
        this.runTimer();
    }
    initTimer() {
        let temp;
        this.h = Math.floor(this._timeInSeconds / 60 / 60);
        temp = this._timeInSeconds - this.h * 60 * 60;
        this.m = Math.floor(temp / 60);
        temp = temp - this.m * 60;
        this.s = temp--;
        const hour = this.h < 10 ? "0" + this.h : this.h;
        const minute = this.m < 10 ? "0" + this.m : this.m;
        const second = this.s < 10 - 1 ? "0" + this.s : this.s;
        this._counterString = hour + ":" + minute + ":" + second;
    }
    get counterString() {
        return this._counterString;
    }
    get timeInSecond() {
        return this._timeInSeconds;
    }
    set timeInSecond(seconds) {
        this._timeInSeconds = seconds;
    }
    pauseTimer() {
        this._running = false;
        clearInterval(this.timerId);
    }
    runTimer() {
        this._running = true;
        this.timerId = setInterval(() => {
            this._timeInSeconds--;
            this.initTimer();
            if (this._timeInSeconds <= 0) {
                clearInterval(this.timerId);
            }
        }, 900);
    }
    get running() {
        return this._running;
    }
}
