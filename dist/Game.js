"use strict";
class Game {
    constructor(canvasId, canvasWidth, canvasHeight, graphicsPath, soundPath) {
        this.canvas = new Canvas(canvasId, canvasWidth, canvasHeight);
        this.graphicsPath = graphicsPath;
        this.soundPath = soundPath;
        this.gameScreenManager = new GameScreenManager();
        this.gameScreenManager.addGameScreen(new GameMainMenuScreen(this.canvas, this.gameScreenManager, this.graphicsPath));
        this.loopGame();
    }
    update() {
        this.gameScreenManager.update(this.canvas.mousePosition, this.canvas.mouseDown, this.canvas.mouseClicked);
        this.canvas.update();
    }
    draw() {
        this.canvas.draw();
        this.gameScreenManager.draw(this.canvas.context);
    }
    loopGame() {
        this.update();
        this.draw();
        window.setTimeout(() => this.loopGame(), 1000 / 60);
    }
}
