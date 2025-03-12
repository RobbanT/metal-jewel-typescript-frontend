"use strict";
class Game {
    constructor(canvasId, gameWidth, gameHeight, graphicsPath, soundPath) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.graphicsPath = graphicsPath;
        this.soundPath = soundPath;
        this.gameScale = new Vector(1, 1);
        this.canvas = new Canvas(canvasId, gameWidth, gameHeight, this.gameScale);
        this.gameScreenManager = new GameScreenManager();
        this.gameScreenManager.addGameScreen(new GameMainMenuScreen(this.canvas, this.gameScreenManager, this.graphicsPath, this.soundPath));
        this.loopGame();
        window.addEventListener("resize", () => {
            const widthToHeight = gameWidth / gameHeight;
            let newWidth = window.innerWidth > gameWidth ? gameWidth : window.innerWidth;
            let newHeight = window.innerHeight > gameHeight ? gameHeight : window.innerHeight;
            const newWidthToHeight = newWidth / newHeight;
            if (newWidthToHeight > widthToHeight) {
                newWidth = newHeight * widthToHeight;
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
                this.gameScale.x = this.canvas.width / gameWidth;
                this.gameScale.y = this.canvas.height / gameHeight;
            }
            else {
                newHeight = newWidth / widthToHeight;
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
                this.gameScale.y = this.canvas.height / gameHeight;
                this.gameScale.x = this.canvas.width / gameWidth;
            }
        });
        window.dispatchEvent(new Event("resize"));
    }
    update() {
        this.gameScreenManager.update(this.canvas.inputData);
        this.canvas.update();
    }
    draw() {
        var _a, _b;
        //Test
        this.canvas.context.save();
        this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.context.scale(this.gameScale.x, this.gameScale.y);
        this.gameScreenManager.draw(this.canvas.context);
        (_a = this.canvas.context) === null || _a === void 0 ? void 0 : _a.translate(0, 0);
        (_b = this.canvas.context) === null || _b === void 0 ? void 0 : _b.restore();
    }
    loopGame() {
        this.update();
        this.draw();
        window.setTimeout(() => this.loopGame(), 1000 / 60);
    }
}
