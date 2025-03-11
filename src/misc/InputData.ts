class InputData {
    private _position: Vector = new Vector(0, 0);
    private _mouseDown: boolean = false;
    private _mouseClicked: boolean = false;
    private _touchStarted: boolean = false;
    private _touchEnded: boolean = false;

    constructor() {}

    get position(): Vector {
        return this._position;
    }

    set position(position: Vector) {
        this._position = position;
    }

    get mouseDown(): boolean {
        return this._mouseDown;
    }

    set mouseDown(mouseDown: boolean) {
        this._mouseDown = mouseDown;
    }

    get mouseClicked(): boolean {
        return this._mouseClicked;
    }

    set mouseClicked(mouseClicked: boolean) {
        this._mouseClicked = mouseClicked;
    }

    get touchStarted(): boolean {
        return this._touchStarted;
    }

    set touchStarted(touchStarted: boolean) {
        this._touchStarted = touchStarted;
    }

    get touchEnded(): boolean {
        return this._touchEnded;
    }

    set touchEnded(touchEnded: boolean) {
        this._touchEnded = touchEnded;
    }
}
