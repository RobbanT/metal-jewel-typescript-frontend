class Rectangle extends Vector {
    private _width: number;
    private _height: number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this._width = width;
        this._height = height;
    }

    get width(): number {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height(): number {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }

    get top(): number {
        return this.y - this._height / 2;
    }

    get right(): number {
        return this.x + this._width / 2;
    }

    get bottom(): number {
        return this.y + this._height / 2;
    }

    get left(): number {
        return this.x - this._width / 2;
    }

    get origin(): Vector {
        return new Vector(this.x - this._width / 2, this.y - this._height / 2);
    }

    get dimension(): Rectangle {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }

    set dimension(rectangle: Rectangle) {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.width = rectangle.width;
        this.height = rectangle.height;
    }

    contains(vector: Vector): boolean {
        return vector.x >= this.left && vector.x <= this.right && vector.y >= this.top && vector.y <= this.bottom;
    }
}
