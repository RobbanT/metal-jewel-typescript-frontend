"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["green"] = 2] = "green";
    Colors[Colors["yellow"] = 3] = "yellow";
    Colors[Colors["purple"] = 4] = "purple";
})(Colors || (Colors = {}));
class Game {
    constructor(canvasId) {
        this._canvasWidth = 564;
        this._canvasHeight = 406;
        this._canvasOriginX = this._canvasWidth / 2;
        this._canvasOriginY = this._canvasHeight / 2;
        SpriteText.initialize();
        this._canvas = new Canvas(canvasId, this._canvasWidth, this._canvasHeight);
        this._background = new Sprite(new Rectangle(this._canvasOriginX, this._canvasOriginY, 564, 406), "res/graphics/main-menu-background.png");
        this._leftJewel = new Sprite(new Rectangle(75, 75, 30, 30), `res/graphics/${Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)]}-jewel-concave.png`);
        this._rightJewel = new Sprite(new Rectangle(489, 75, 30, 30), `res/graphics/${Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)]}-jewel-concave.png`);
        this._button1 = new Button(new Rectangle(this._canvasOriginX, this._canvasOriginY - 22, 230, 45), "res/graphics/big-button.png", "res/graphics/big-button-shade.png", "Play", () => window.close());
        this._button2 = new Button(new Rectangle(this._canvasOriginX, this._canvasOriginY + 58, 230, 45), "res/graphics/big-button.png", "res/graphics/big-button-shade.png", "Hi-Score", () => window.close());
        this._button3 = new Button(new Rectangle(this._canvasOriginX, this._canvasOriginY + 138, 230, 45), "res/graphics/big-button.png", "res/graphics/big-button-shade.png", "GitHub", () => open("https://github.com/RobbanT/metal-jewel-typescript-frontend", "_self").close());
        this.loopGame();
    }
    update() {
        this._button1.update(this._canvas.mousePositionX, this._canvas.mousePositionY, this._canvas.mouseDown, this._canvas.mouseClicked);
        this._button2.update(this._canvas.mousePositionX, this._canvas.mousePositionY, this._canvas.mouseDown, this._canvas.mouseClicked);
        this._button3.update(this._canvas.mousePositionX, this._canvas.mousePositionY, this._canvas.mouseDown, this._canvas.mouseClicked);
        if (this._canvas.mouseClicked) {
            this._canvas.mouseClicked = false;
        }
    }
    draw() {
        this._canvas.clear();
        this._canvas.drawSprite(this._background);
        this._canvas.drawSprite(this._leftJewel);
        this._canvas.drawSprite(this._rightJewel);
        this._canvas.drawSprite(this._button1);
        this._canvas.drawSprite(this._button2);
        this._canvas.drawSprite(this._button3);
        this._canvas.save();
    }
    loopGame() {
        this.update();
        this.draw();
        window.setTimeout(() => this.loopGame(), 1000 / 60);
    }
}
