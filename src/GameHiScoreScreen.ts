class GameHiScoreScreen extends GameMenuScreen {
    private highScoresText: SpriteText[] = new Array();

    constructor(canvas: Canvas, gameScreenManager: GameScreenManager, graphicsPath: string, soundPath: string) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, canvas.width, canvas.height), `${graphicsPath}high-score-screen-background.png`);
        let highScores: number[] = new Array();
        fetch("https://backend-yduns.ondigitalocean.app/high-scores")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((highScore) => highScores.push(highScore.point));
                highScores.forEach((highScore, i) => {
                    let placeText;
                    switch (i) {
                        case 0:
                            placeText = "1ST";
                            break;
                        case 1:
                            placeText = "2ND";
                            break;
                        case 2:
                            placeText = "3RD";
                            break;
                        case 3:
                            placeText = "4TH";
                            break;
                    }
                    this.highScoresText.push(new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${placeText}:  ${highScore}`, 1, this.charsSprites));
                });
            })
            .catch(() => alert("Fel, kunde inte hämta data!"));
        this.buttonArray.push(
            new Button(
                new Rectangle(canvas.origin.x, canvas.origin.y + 149, 112, 30),
                `${graphicsPath}small-button.png`,
                `${graphicsPath}small-button-shade.png`,
                `${graphicsPath}font.png`,
                "Back",
                () => gameScreenManager.changeGameScreen(new GameMainMenuScreen(canvas, gameScreenManager, graphicsPath, soundPath), this),
                2,
                0.4,
                this.charsSprites
            )
        );
    }

    draw(context: CanvasRenderingContext2D | null): void {
        super.draw(context);
        this.highScoresText.forEach((highScoreText, i) => highScoreText.drawText(context, 70, 97 + i * 54, 410, 45));
    }
}
