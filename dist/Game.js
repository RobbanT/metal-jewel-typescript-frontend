"use strict";
class Game {
    constructor(canvasId, gameWidth, gameHeight, graphicsPath, soundPath) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.graphicsPath = graphicsPath;
        this.soundPath = soundPath;
        this.canvas = new Canvas(canvasId, gameWidth, gameHeight);
        this.gameScreenManager = new GameScreenManager();
        this.gameScreenManager.addGameScreen(new GameMainMenuScreen(this.canvas, this.gameScreenManager, this.graphicsPath, this.soundPath));
        this.loopGame();
    }
    update() {
        this.gameScreenManager.update(this.canvas.inputData);
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
