"use strict";
class Rectangle extends Vector {
    constructor(x, y, width, height) {
        super(x, y);
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(width) {
        this._width = width;
    }
    get height() {
        return this._height;
    }
    set height(height) {
        this._height = height;
    }
    get top() {
        return this.y - this._height / 2;
    }
    get right() {
        return this.x + this._width / 2;
    }
    get bottom() {
        return this.y + this._height / 2;
    }
    get left() {
        return this.x - this._width / 2;
    }
    get origin() {
        return new Vector(this.x - this._width / 2, this.y - this._height / 2);
    }
    contains(vector) {
        return vector.x >= this.left && vector.x <= this.right && vector.y >= this.top && vector.y <= this.bottom;
    }
    intersects(rectangle) {
        return this.left <= rectangle.right && this.right >= rectangle.left && this.top <= rectangle.bottom && this.bottom >= rectangle.top;
    }
}
