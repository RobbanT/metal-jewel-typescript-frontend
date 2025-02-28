"use strict";
class GameScreenManager {
    constructor() {
        this.gameScreens = new Array();
        this.tempGameScreens = new Array();
    }
    update(mousePosition, mouseDown, mouseClicked) {
        this.tempGameScreens = new Array();
        this.gameScreens.forEach((gameScreen) => this.tempGameScreens.push(gameScreen));
        this.tempGameScreens.forEach((gameScreen) => {
            if (gameScreen.running) {
                gameScreen.update(mousePosition, mouseDown, mouseClicked);
            }
        });
    }
    draw(context) {
        this.gameScreens.forEach((gameScreen) => gameScreen.draw(context));
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
        //screenBehindPopUp.PauseScreen();
    }
    RemoveGamePopUpScreen(gamePopUpScreen) {
        //this.removeGameScreen(gamePopUpScreen);
    }
    removeAllGameScreens() {
        this.gameScreens = new Array();
    }
}
