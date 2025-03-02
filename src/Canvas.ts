class Canvas {
    private readonly canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D | null;
    private readonly _origin: Vector;
    private readonly _inputData: InputData;

    constructor(canvasId: string, width: number, height: number) {
        this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this._context = this.canvas!.getContext("2d");
        this._origin = new Vector(width / 2, height / 2);
        this._inputData = new InputData();

        this.canvas.addEventListener("mousemove", (event) => {
            this._inputData.position = new Vector(event.pageX - this.canvas.offsetLeft, event.pageY - this.canvas.offsetTop);
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
                return;
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

    get height(): number {
        return this.canvas.height;
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

    draw(): void {
        this._context!.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
