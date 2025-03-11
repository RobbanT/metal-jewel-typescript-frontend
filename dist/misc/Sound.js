"use strict";
class Sound {
    constructor(source, volume = 0.5, loop = false) {
        this.audio = new Audio(source);
        this.audio.volume = volume;
        this.audio.loop = loop;
    }
    play() {
        this.audio.play();
    }
    stop() {
        this.audio.pause();
    }
}
