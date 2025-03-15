"use strict";
class Sound {
    constructor(source, volume = 0.5, loop = false, playbackRate = 1) {
        this.audio = new Audio(source);
        this.audio.volume = volume;
        this.audio.loop = loop;
        this.audio.playbackRate = playbackRate;
    }
    play() {
        if (this.audio.currentTime === 0 || this.audio.currentTime === this.audio.duration) {
            this.audio.play();
        }
    }
    stop() {
        this.audio.pause();
    }
}
