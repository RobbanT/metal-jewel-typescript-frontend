"use strict";
class Sound {
    constructor(source, volume = 0.5, loop = false) {
        this._isLoaded = false;
        this._audio = new Audio(source);
        this._audio.volume = volume;
        this._audio.loop = loop;
        this._audio.onload = () => (this._isLoaded = true);
    }
    get isLoaded() {
        return this._isLoaded;
    }
    play() {
        if (this._isLoaded) {
            this._audio.play();
        }
        else {
            console.log("Ljud ej laddat.");
        }
    }
    stop() {
        if (this._isLoaded) {
            this._audio.pause();
        }
        else {
            console.log("Ljud ej laddat.");
        }
    }
}
