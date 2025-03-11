"use strict";
class GameScreenManager {
    constructor() {
        this.gameScreens = new Array();
    }
    getScreens() {
        return this.gameScreens;
    }
    addGameScreen(gameScreen) {
        this.gameScreens.push(gameScreen);
    }
    changeGameScreen(newGameScreen, oldGameScreen) {
        this.removeAllGameScreens();
        this.addGameScreen(newGameScreen);
    }
    addGamePopUpScreen(gamePopUpScreen, gameScreenBehindGamePopUpScreen) {
        this.addGameScreen(gamePopUpScreen);
        gameScreenBehindGamePopUpScreen.cover();
        gameScreenBehindGamePopUpScreen.running = false;
    }
    removeGamePopUpScreen(gameScreenBehindGamePopUpScreen) {
        this.gameScreens.pop();
        gameScreenBehindGamePopUpScreen.unCover();
        gameScreenBehindGamePopUpScreen.running = true;
    }
    removeAllGameScreens() {
        this.gameScreens = new Array();
    }
    update(inputData) {
        this.gameScreens.forEach((gameScreen) => {
            if (gameScreen.running) {
                gameScreen.update(inputData);
            }
        });
    }
    draw(context) {
        this.gameScreens.forEach((gameScreen) => gameScreen.draw(context));
    }
}
