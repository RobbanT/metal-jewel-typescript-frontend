class Vector {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y(): number {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    get position(): Vector {
        return new Vector(this._x, this._y);
    }

    set position(position: Vector) {
        this._x = position.x;
        this._y = position.y;
    }
}
