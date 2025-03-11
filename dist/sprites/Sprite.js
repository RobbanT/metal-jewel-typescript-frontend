"use strict";
class Sprite extends Rectangle {
    constructor(rectangle, src) {
        super(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        this._image = new Image();
        this._image.width = this.width;
        this._image.height = this.height;
        this._image.src = src;
    }
    get image() {
        return this._image;
    }
    draw(context) {
        context.drawImage(this._image, this.origin.x, this.origin.y, this.width, this.height);
    }
}
