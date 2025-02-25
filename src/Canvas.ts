class Canvas {
    private _canvas: HTMLCanvasElement;
    private _mousePositionX: number = 0;
    private _mousePositionY: number = 0;
    private _mouseDown: boolean = false;
    private _mouseClicked: boolean = false;
    private _context: CanvasRenderingContext2D | null;

    constructor(canvasId: string, width: number, height: number) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
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
        this._context = this._canvas!.getContext("2d");
    }

    clear(): void {
        this._context!.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    save(): void {
        this._context!.save();
    }

    get mousePositionX(): number {
        return this._mousePositionX;
    }

    get mousePositionY(): number {
        return this._mousePositionY;
    }

    get mouseDown(): boolean {
        return this._mouseDown;
    }

    get mouseClicked(): boolean {
        return this._mouseClicked;
    }

    set mouseClicked(clicked: boolean) {
        this._mouseClicked = clicked;
    }

    drawSprite(sprite: Sprite): void {
        sprite.draw(this._context);
    }
}
