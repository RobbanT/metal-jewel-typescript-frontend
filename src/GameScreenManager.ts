class GameScreenManager {
    private gameScreens: GameScreen[] = new Array();

    constructor() {}

    getScreens(): Array<GameScreen> {
        return this.gameScreens;
    }

    addGameScreen(gameScreen: GameScreen): void {
        this.gameScreens.push(gameScreen);
    }

    changeGameScreen(newGameScreen: GameScreen, oldGameScreen: GameScreen) {
        this.removeAllGameScreens();
        this.addGameScreen(newGameScreen);
    }

    addGamePopUpScreen(gamePopUpScreen: GamePopUpScreen, gameScreenBehindGamePopUpScreen: GameScreen) {
        this.addGameScreen(gamePopUpScreen);
        gameScreenBehindGamePopUpScreen.cover();
        gameScreenBehindGamePopUpScreen.running = false;
    }

    removeGamePopUpScreen(gameScreenBehindGamePopUpScreen: GameScreen) {
        this.gameScreens.pop();
        gameScreenBehindGamePopUpScreen.unCover();
        gameScreenBehindGamePopUpScreen.running = true;
    }

    removeAllGameScreens() {
        this.gameScreens = new Array();
    }

    update(inputData: InputData) {
        this.gameScreens.forEach((gameScreen) => {
            if (gameScreen.running) {
                gameScreen.update(inputData);
            }
        });
    }

    draw(context: CanvasRenderingContext2D | null) {
        this.gameScreens.forEach((gameScreen) => gameScreen.draw(context));
    }
}
