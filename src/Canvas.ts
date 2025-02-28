class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D | null;
    private readonly _origin: Vector;
    private readonly _mousePosition: Vector = new Vector(0, 0);
    private _mouseDown: boolean = false;
    private _mouseClicked: boolean = false;

    constructor(canvasId: string, width: number, height: number) {
        this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this._context = this.canvas!.getContext("2d");
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

    get width(): number {
        return this.canvas.width;
    }

    get height(): number {
        return this.canvas.height;
    }

    get origin(): Vector {
        return this._origin;
    }

    get context() {
        return this._context;
    }

    get mousePosition(): Vector {
        return this._mousePosition;
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

    clear(): void {
        this._context!.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    save(): void {
        this._context!.save();
    }

    update(): void {
        if (this._mouseClicked) {
            this.mouseClicked = false;
        }
    }

    draw(): void {
        this.clear();
    }
}
