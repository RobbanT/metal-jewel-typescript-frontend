"use strict";
class Canvas {
    constructor(canvasId, width, height) {
        this._canvas = document.getElementById(canvasId);
        this._canvas.width = width;
        this._canvas.height = height;
        this._context = this._canvas.getContext("2d");
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    save() {
        this._context.save();
    }
    drawSprite(sprite) {
        sprite.draw(this._context);
    }
}
