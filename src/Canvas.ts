class Canvas {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D | null;

    constructor(canvasId: string, width: number, height: number) {
        this._canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this._canvas.width = width;
        this._canvas.height = height;
        this._context = this._canvas!.getContext("2d");
    }

    clear(): void {
        this._context!.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    save(): void {
        this._context!.save();
    }

    drawSprite(sprite: Sprite): void {
        sprite.draw(this._context);
    }
}
