"use strict";
class InputData {
    constructor() {
        this._position = new Vector(0, 0);
        this._mouseDown = false;
        this._mouseClicked = false;
        this._touchStarted = false;
        this._touchEnded = false;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
    get mouseDown() {
        return this._mouseDown;
    }
    set mouseDown(mouseDown) {
        this._mouseDown = mouseDown;
    }
    get mouseClicked() {
        return this._mouseClicked;
    }
    set mouseClicked(mouseClicked) {
        this._mouseClicked = mouseClicked;
    }
    get touchStarted() {
        return this._touchStarted;
    }
    set touchStarted(touchStarted) {
        this._touchStarted = touchStarted;
    }
    get touchEnded() {
        return this._touchEnded;
    }
    set touchEnded(touchEnded) {
        this._touchEnded = touchEnded;
    }
}
