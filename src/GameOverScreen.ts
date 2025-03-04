class GameOverScreen extends GamePopUpScreen {
    constructor(canvas: Canvas, gameScreenManager: GameScreenManager, graphicsPath: string, soundPath: string) {
        super(canvas, gameScreenManager, graphicsPath, soundPath);
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 430, 203), `${graphicsPath}game-over-screen-background.png`);
        this.buttonArray.push(
            new Button(
                new Rectangle(212, canvas.origin.y + 48, 112, 30),
                `${graphicsPath}small-button.png`,
                `${graphicsPath}small-button-shade.png`,
                `${graphicsPath}font.png`,
                "Yes",
                () => {
                    gameScreenManager.removeAllGameScreens();
                    gameScreenManager.changeGameScreen(new GamePlayScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
                },
                2,
                0.5,
                this.charsSprites
            )
        );

        this.buttonArray.push(
            new Button(
                new Rectangle(352, canvas.origin.y + 48, 112, 30),
                `${graphicsPath}small-button.png`,
                `${graphicsPath}small-button-shade.png`,
                `${graphicsPath}font.png`,
                "No",
                () => {
                    gameScreenManager.removeAllGameScreens();
                    gameScreenManager.changeGameScreen(new GameMainMenuScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
                },
                2,
                0.5,
                this.charsSprites
            )
        );
    }
}
