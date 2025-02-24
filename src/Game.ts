enum Colors {
    red,
    blue,
    green,
    yellow,
    purple,
}

class Game {
    private _canvasWidth: number = 564;
    private _canvasHeight: number = 406;
    private _canvasOriginX: number = this._canvasWidth / 2;
    private _canvasOriginY: number = this._canvasHeight / 2;
    private _canvas: Canvas;
    private _background: Sprite;
    private _leftJewel: Sprite;
    private _rightJewel: Sprite;
    private _button1: Sprite;
    private _button2: Sprite;
    private _button3: Sprite;

    constructor(canvasId: string) {
        this._canvas = new Canvas(canvasId, this._canvasWidth, this._canvasHeight);
        this._background = new Sprite(new Rectangle(this._canvasOriginX, this._canvasOriginY, 564, 406), "res/graphics/main-menu-background.png");
        this._leftJewel = new Sprite(new Rectangle(75, 75, 30, 30), `res/graphics/${Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)]}-jewel-concave.png`);
        this._rightJewel = new Sprite(new Rectangle(489, 75, 30, 30), `res/graphics/red-jewel-concave.png`);
        this._button1 = new Sprite(new Rectangle(this._canvasOriginX, this._canvasOriginY - 22, 230, 45), "res/graphics/big-button.png");
        this._button2 = new Sprite(new Rectangle(this._canvasOriginX, this._canvasOriginY + 58, 230, 45), "res/graphics/big-button.png");
        this._button3 = new Sprite(new Rectangle(this._canvasOriginX, this._canvasOriginY + 138, 230, 45), "res/graphics/big-button.png");
        this.loopGame();
    }

    update(): void {}

    draw(): void {
        this._canvas.clear();
        this._canvas.drawSprite(this._background);
        this._canvas.drawSprite(this._leftJewel);
        this._canvas.drawSprite(this._rightJewel);
        this._canvas.drawSprite(this._button1);
        this._canvas.drawSprite(this._button2);
        this._canvas.drawSprite(this._button3);
        this._canvas.save();
    }

    loopGame(): void {
        this.update();
        this.draw();
        window.setTimeout(() => this.loopGame(), 1000 / 60);
    }
}
