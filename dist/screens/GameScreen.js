"use strict";
class GameScreen {
    constructor(gameScreenManager, graphicsPath) {
        this.covered = false;
        this.background = null;
        this._running = true;
        this.gameScreenManager = gameScreenManager;
    }
    isCovered() {
        return this.covered;
    }
    cover() {
        this.covered = true;
    }
    unCover() {
        this.covered = false;
    }
    get running() {
        return this._running;
    }
    set running(running) {
        this._running = running;
    }
    update(inputData) { }
    draw(context) {
        context.drawImage(this.background.image, this.background.origin.x, this.background.origin.y, this.background.width, this.background.height);
    }
}
