"use strict";
class GamePauseScreen extends GamePopUpScreen {
    constructor(canvas, gameScreenManager, graphicsPath, soundPath) {
        super(canvas, gameScreenManager, graphicsPath, soundPath);
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 430, 203), `${graphicsPath}pause-screen-background.png`);
        this.buttonArray.push(new Button(new Rectangle(164, canvas.origin.y + 48, 112, 30), `${graphicsPath}small-button.png`, `${graphicsPath}small-button-shade.png`, `${graphicsPath}font.png`, "Restart", () => {
            gameScreenManager.removeAllGameScreens();
            gameScreenManager.changeGameScreen(new GamePlayScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
        }, 2, 0.4, this.charsSprites));
        this.buttonArray.push(new Button(new Rectangle(canvas.origin.x, canvas.origin.y + 48, 112, 30), `${graphicsPath}small-button.png`, `${graphicsPath}small-button-shade.png`, `${graphicsPath}font.png`, "Resume", () => {
            this.gameScreenManager.removeGamePopUpScreen(gameScreenManager.getScreens()[0]);
        }, 2, 0.4, this.charsSprites));
        this.buttonArray.push(new Button(new Rectangle(400, canvas.origin.y + 48, 112, 30), `${graphicsPath}small-button.png`, `${graphicsPath}small-button-shade.png`, `${graphicsPath}font.png`, "Main Menu", () => {
            gameScreenManager.removeAllGameScreens();
            gameScreenManager.changeGameScreen(new GameMainMenuScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
        }, 2, 0.4, this.charsSprites));
    }
}
