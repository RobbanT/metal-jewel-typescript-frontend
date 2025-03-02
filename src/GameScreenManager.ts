class GameScreenManager {
    private gameScreens: GameScreen[] = new Array();
    private tempGameScreens: GameScreen[] = new Array();

    constructor() {}

    addGameScreen(gameScreen: GameScreen): void {
        this.gameScreens.push(gameScreen);
    }

    removeGameScreen(gameScreen: GameScreen) {
        this.removeAllGameScreens();
    }

    changeGameScreen(newGameScreen: GameScreen, oldGameScreen: GameScreen) {
        this.removeGameScreen(oldGameScreen);
        this.addGameScreen(newGameScreen);
    }

    addGamePopUpScreen(gamePopUpScreen: GamePopUpScreen, gameScreenBehindGamePopUpScreen: GameScreen) {
        //this.addGameScreen(gamePopUpScreen);
        //screenBehindPopUp.CoverScreenWithPopUp();
        //screenBehindPopUp.PauseScreen();s
    }

    RemoveGamePopUpScreen(gamePopUpScreen: GamePopUpScreen) {
        //this.removeGameScreen(gamePopUpScreen);
    }

    removeAllGameScreens() {
        this.gameScreens = new Array();
    }

    update(inputData: InputData) {
        this.tempGameScreens = new Array();
        this.gameScreens.forEach((gameScreen) => this.tempGameScreens.push(gameScreen));
        this.tempGameScreens.forEach((gameScreen) => {
            if (gameScreen.running) {
                gameScreen.update(inputData);
            }
        });
    }

    draw(context: CanvasRenderingContext2D | null) {
        this.gameScreens.forEach((gameScreen) => gameScreen.draw(context));
    }
}
