"use strict";
class Canvas {
    constructor(canvasId, gameWidth, gameHeight, gameScale) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = gameWidth;
        this.canvas.height = gameHeight;
        this._context = this.canvas.getContext("2d");
        this._origin = new Vector(gameWidth / 2, gameHeight / 2);
        this._inputData = new InputData();
        this.canvas.addEventListener("mousemove", (event) => {
            this._inputData.position = new Vector((event.pageX - this.canvas.offsetLeft) / gameScale.x, (event.pageY - this.canvas.offsetTop) / gameScale.y);
        });
        this.canvas.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                this._inputData.mouseDown = true;
            }
        });
        this.canvas.addEventListener("mouseup", (event) => {
            if (event.button === 0) {
                this._inputData.mouseClicked = true;
                this._inputData.mouseDown = false;
            }
        });
        this.canvas.addEventListener("touchstart", (event) => {
            this._inputData.position = new Vector((event.touches[0].pageX - this.canvas.offsetLeft) / gameScale.x, (event.touches[0].pageY - this.canvas.offsetTop) / gameScale.y);
            this._inputData.touchStarted = true;
        });
        this.canvas.addEventListener("touchmove", (event) => {
            this._inputData.position = new Vector((event.touches[0].pageX - this.canvas.offsetLeft) / gameScale.x, (event.touches[0].pageY - this.canvas.offsetTop) / gameScale.y);
            this._inputData.touchStarted = true;
        });
        this.canvas.addEventListener("touchcancel", (event) => {
            this._inputData.touchStarted = false;
            this._inputData.touchEnded = true;
            this._inputData.position = new Vector(0, 0);
        });
        this.canvas.addEventListener("touchend", (event) => {
            this._inputData.touchStarted = false;
            this._inputData.touchEnded = true;
        });
    }
    get width() {
        return this.canvas.width;
    }
    set width(width) {
        this.canvas.width = width;
    }
    get height() {
        return this.canvas.height;
    }
    set height(height) {
        this.canvas.height = height;
    }
    get origin() {
        return this._origin;
    }
    get context() {
        return this._context;
    }
    get inputData() {
        return this._inputData;
    }
    update() {
        if (this._inputData.mouseClicked) {
            this._inputData.mouseClicked = false;
        }
        if (this._inputData.touchEnded) {
            this._inputData.position = new Vector(0, 0);
            this._inputData.touchEnded = false;
        }
    }
}
