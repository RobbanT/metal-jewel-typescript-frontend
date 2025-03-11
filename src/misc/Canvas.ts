class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D | null;
    private readonly _origin: Vector;
    private readonly _inputData: InputData;
    private readonly scale: Vector;

    constructor(canvasId: string, width: number, height: number, scale: Vector) {
        this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this._context = this.canvas!.getContext("2d");
        this._origin = new Vector(width / 2, height / 2);
        this._inputData = new InputData();
        this.scale = scale;

        this.canvas.addEventListener("mousemove", (event) => {
            console.log("Skalning: " + scale.x);
            this._inputData.position = new Vector((event.pageX - this.canvas.offsetLeft) / scale.x, (event.pageY - this.canvas.offsetTop) / scale.y);
            console.log(this._inputData.position);
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

        this.canvas.addEventListener("touchmove", (event) => {
            this._inputData.position = new Vector(event.touches[0].pageX - this.canvas.offsetLeft, event.touches[0].pageY - this.canvas.offsetTop);
        });

        this.canvas.addEventListener("touchstart", (event) => {
            this._inputData.touchStarted = true;
        });

        this.canvas.addEventListener("touchend", (event) => {
            this._inputData.touchEnded = true;
            this._inputData.touchStarted = false;
        });
    }

    get width(): number {
        return this.canvas.width;
    }

    set width(width: number) {
        this.canvas.width = width;
    }

    get height(): number {
        return this.canvas.height;
    }

    set height(height: number) {
        this.canvas.height = height;
    }

    get origin(): Vector {
        return this._origin;
    }

    get context() {
        return this._context;
    }

    get inputData(): InputData {
        return this._inputData;
    }

    update(): void {
        if (this._inputData.mouseClicked) {
            this._inputData.mouseClicked = false;
        }
        if (this._inputData.touchEnded) {
            this._inputData.touchEnded = false;
        }
    }

    draw(scaleX: number, scaleY: number): void {
        this._context?.save();
        this._context!.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this._context!.scale(scaleX, scaleY);
    }
}
