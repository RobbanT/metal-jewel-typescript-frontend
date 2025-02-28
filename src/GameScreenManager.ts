class GameScreenManager {
    private gameScreens: GameScreen[] = new Array();
    private tempGameScreens: GameScreen[] = new Array();

    constructor() {}

    update(mousePosition: Vector, mouseDown: boolean, mouseClicked: boolean) {
        this.tempGameScreens = new Array();
        this.gameScreens.forEach((gameScreen) => this.tempGameScreens.push(gameScreen));
        this.tempGameScreens.forEach((gameScreen) => {
            if (gameScreen.running) {
                gameScreen.update(mousePosition, mouseDown, mouseClicked);
            }
        });
    }

    draw(context: CanvasRenderingContext2D | null) {
        this.gameScreens.forEach((gameScreen) => gameScreen.draw(context));
    }

    addGameScreen(gameScreen: GameScreen): void {
        this.gameScreens.push(gameScreen);
    }

    removeGameScreen(gameScreen: GameScreen) {
        this.gameScreens.pop;
        console.log(this.gameScreens);
    }

    changeGameScreen(newGameScreen: GameScreen, oldGameScreen: GameScreen) {
        this.removeGameScreen(oldGameScreen);
        this.addGameScreen(newGameScreen);
    }

    addGamePopUpScreen(gamePopUpScreen: GamePopUpScreen, gameScreenBehindGamePopUpScreen: GameScreen) {
        //this.addGameScreen(gamePopUpScreen);
        //screenBehindPopUp.CoverScreenWithPopUp();
        //screenBehindPopUp.PauseScreen();
    }

    RemoveGamePopUpScreen(gamePopUpScreen: GamePopUpScreen) {
        //this.removeGameScreen(gamePopUpScreen);
    }

    removeAllGameScreens() {
        this.gameScreens = new Array();
    }
}
