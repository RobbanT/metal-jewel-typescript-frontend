class GamePlayScreen extends GameMenuScreen {
    private score: number = 0;
    private timer: Timer = new Timer();
    private timerText: SpriteText;
    private scoreText: SpriteText;
    private sounds: Map<string, Sound> = new Map();
    private readonly showGameOverScreen: Function;

    private jewel: Jewel;
    constructor(canvas: Canvas, gameScreenManager: GameScreenManager, graphicsPath: string, soundPath: string) {
        super(gameScreenManager, graphicsPath, soundPath);

        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}game-screen-background.png`);
        this.timerText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.timer.counterString}`, 0.45, this.charsSprites);
        this.scoreText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.score}`, 0.45, this.charsSprites);

        this.jewel = new Jewel(new Rectangle(400, 200, 800, 40), `${graphicsPath}blue-jewel-sprite-sheet.png`, 20, false, 120, true, new Vector(100, 100), new Vector(200, 200), new Vector(1, 1));

        this.sounds.set("buttonSound", new Sound(`${soundPath}button.wav`));
        this.sounds.set("clusterSound", new Sound(`${soundPath}cluster.wav`));
        this.sounds.set("gameOverSound", new Sound(`${soundPath}game-over.wav`));
        this.sounds.set("newJewelsSound", new Sound(`${soundPath}new-jewels.wav`));
        this.sounds.set("sevenClusterSound", new Sound(`${soundPath}seven-cluster.wav`));
        this.sounds.set("switchSound", new Sound(`${soundPath}switch.wav`));

        this.buttonArray.push(
            new Button(
                new Rectangle(96, canvas.origin.y + 149, 112, 30),
                `${graphicsPath}small-button.png`,
                `${graphicsPath}small-button-shade.png`,
                `${graphicsPath}font.png`,
                "Menu",
                () => {
                    this.timer.pauseTimer();
                    gameScreenManager.addGamePopUpScreen(new GamePauseScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
                },
                2,
                0.4,
                this.charsSprites
            )
        );

        this.showGameOverScreen = () => gameScreenManager.addGamePopUpScreen(new GameOverScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
    }

    update(inpuData: InputData): void {
        super.update(inpuData);
        this.timerText.text = this.timer.counterString;
        if (this.timer.timeInSecond <= 0) {
            this.sounds.get("gameOverSound")?.play();
            this.showGameOverScreen();
        }
        if (!this.timer.running) {
            this.timer.runTimer();
        }

        this.jewel.update();
        /* fetch("https://backend-yduns.ondigitalocean.app/high-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ point: this.score }),
        }).catch(() => alert("Fel, kunde inte lagra data!"));
        */
    }
    draw(context: CanvasRenderingContext2D | null): void {
        super.draw(context);
        this.scoreText.drawText(context, 70, 38, 50, 49);
        this.timerText.drawText(context, 70, 97, 50, 49);
        this.jewel.draw(context);
    }
}
