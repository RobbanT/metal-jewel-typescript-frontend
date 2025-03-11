"use strict";
class Vector {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    get position() {
        return new Vector(this._x, this._y);
    }
    set position(position) {
        this._x = position.x;
        this._y = position.y;
    }
}
