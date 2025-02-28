"use strict";
class Canvas {
    constructor(canvasId, width, height) {
        this._mousePosition = new Vector(0, 0);
        this._mouseDown = false;
        this._mouseClicked = false;
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this._context = this.canvas.getContext("2d");
        this._origin = new Vector(width / 2, height / 2);
        this.canvas.addEventListener("mousemove", (event) => {
            this._mousePosition.position = new Vector(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop);
        });
        this.canvas.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                this._mouseDown = true;
            }
        });
        this.canvas.addEventListener("mouseup", (event) => {
            if (event.button === 0) {
                this._mouseClicked = true;
                this._mouseDown = false;
            }
        });
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    get origin() {
        return this._origin;
    }
    get context() {
        return this._context;
    }
    get mousePosition() {
        return this._mousePosition;
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
    clear() {
        this._context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    save() {
        this._context.save();
    }
    update() {
        if (this._mouseClicked) {
            this.mouseClicked = false;
        }
    }
    draw() {
        this.clear();
    }
}
