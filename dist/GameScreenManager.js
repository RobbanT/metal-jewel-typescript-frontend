"use strict";
class GameScreenManager {
    constructor() {
        this.gameScreens = new Array();
        this.tempGameScreens = new Array();
    }
    addGameScreen(gameScreen) {
        this.gameScreens.push(gameScreen);
    }
    removeGameScreen(gameScreen) {
        this.removeAllGameScreens();
    }
    changeGameScreen(newGameScreen, oldGameScreen) {
        this.removeGameScreen(oldGameScreen);
        this.addGameScreen(newGameScreen);
    }
    addGamePopUpScreen(gamePopUpScreen, gameScreenBehindGamePopUpScreen) {
        //this.addGameScreen(gamePopUpScreen);
        //screenBehindPopUp.CoverScreenWithPopUp();
        //screenBehindPopUp.PauseScreen();s
    }
    RemoveGamePopUpScreen(gamePopUpScreen) {
        //this.removeGameScreen(gamePopUpScreen);
    }
    removeAllGameScreens() {
        this.gameScreens = new Array();
    }
    update(inputData) {
        this.tempGameScreens = new Array();
        this.gameScreens.forEach((gameScreen) => this.tempGameScreens.push(gameScreen));
        this.tempGameScreens.forEach((gameScreen) => {
            if (gameScreen.running) {
                gameScreen.update(inputData);
            }
        });
    }
    draw(context) {
        this.gameScreens.forEach((gameScreen) => gameScreen.draw(context));
    }
}
