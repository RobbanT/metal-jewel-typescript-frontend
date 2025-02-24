class Sound {
    private _audio: HTMLAudioElement;
    private _isLoaded: boolean = false;

    constructor(source, volume = 0.5, loop = false) {
        this._audio = new Audio(source);
        this._audio.volume = volume;
        this._audio.loop = loop;
        this._audio.onload = () => (this._isLoaded = true);
    }

    get isLoaded(): boolean {
        return this._isLoaded;
    }

    play() {
        if (this._isLoaded) {
            this._audio.play();
        } else {
            console.log("Ljud ej laddat.");
        }
    }

    stop() {
        if (this._isLoaded) {
            this._audio.pause();
        } else {
            console.log("Ljud ej laddat.");
        }
    }
}
