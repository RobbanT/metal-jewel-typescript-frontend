class Timer {
    private h: number = 0;
    private m: number = 0;
    private s: number = 0;
    private _counterString: string;
    private _timeInSeconds: number;
    private timerId: number = 0;
    private _running: boolean = true;

    constructor(timeInSeconds: number = 60) {
        this._counterString = "00:00:00";
        this._timeInSeconds = timeInSeconds;
        this.initTimer();
        this.runTimer();
    }

    private initTimer() {
        let temp: number;
        this.h = Math.floor(this._timeInSeconds / 60 / 60);
        temp = this._timeInSeconds - this.h * 60 * 60;
        this.m = Math.floor(temp / 60);
        temp = temp - this.m * 60;
        this.s = temp--;

        const hour: string | number = this.h < 10 ? "0" + this.h : this.h;
        const minute: string | number = this.m < 10 ? "0" + this.m : this.m;
        const second: string | number = this.s < 10 - 1 ? "0" + this.s : this.s;

        this._counterString = hour + ":" + minute + ":" + second;
    }

    get counterString(): string {
        return this._counterString;
    }

    get timeInSecond(): number {
        return this._timeInSeconds;
    }

    set timeInSecond(seconds: number) {
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

    get running(): boolean {
        return this._running;
    }
}
