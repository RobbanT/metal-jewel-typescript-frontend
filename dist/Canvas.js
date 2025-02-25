"use strict";
class Canvas {
    constructor(canvasId, width, height) {
        this._mousePositionX = 0;
        this._mousePositionY = 0;
        this._mouseDown = false;
        this._mouseClicked = false;
        this._canvas = document.getElementById(canvasId);
        this._canvas.width = width;
        this._canvas.height = height;
        this._canvas.addEventListener("mousemove", (event) => {
            this._mousePositionX = event.pageX - this._canvas.offsetLeft;
            this._mousePositionY = event.pageY - this._canvas.offsetTop;
        });
        this._canvas.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                this._mouseDown = true;
            }
        });
        this._canvas.addEventListener("mouseup", (event) => {
            if (event.button === 0) {
                this._mouseClicked = true;
                this._mouseDown = false;
            }
        });
        this._context = this._canvas.getContext("2d");
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    save() {
        this._context.save();
    }
    get mousePositionX() {
        return this._mousePositionX;
    }
    get mousePositionY() {
        return this._mousePositionY;
    }
    get mouseDown() {
        return this._mouseDown;
    }
    get mouseClicked() {
        return this._mouseClicked;
    }
    set mouseClicked(clicked) {
        this._mouseClicked = clicked;
    }
    drawSprite(sprite) {
        sprite.draw(this._context);
    }
}
