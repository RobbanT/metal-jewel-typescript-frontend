class GamePlayScreen extends GameMenuScreen {
    private score: number = 0;
    private timer: Timer = new Timer();
    private timerText: SpriteText;
    private scoreText: SpriteText;
    private sounds: Map<string, Sound> = new Map();
    private readonly showGameOverScreen: Function;
    private jewelManager: JewelManager;
    private graphicsPath: string;

    constructor(canvas: Canvas, gameScreenManager: GameScreenManager, graphicsPath: string, soundPath: string) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}game-screen-background.png`);
        this.timerText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.timer.counterString}`, 0.45, this.charsSprites);
        this.scoreText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.score}`, 0.45, this.charsSprites);
        this.sounds.set("clusterSound", new Sound(`${soundPath}cluster.wav`));
        this.sounds.set("gameOverSound", new Sound(`${soundPath}game-over.wav`));
        this.sounds.set("newJewelsSound", new Sound(`${soundPath}new-jewels.wav`));
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
                    gameScreenManager.addGamePopUpScreen(new GamePauseScreen(canvas, gameScreenManager, graphicsPath, soundPath, this.timer), this);
                },
                2,
                0.4,
                this.charsSprites
            )
        );
        this.showGameOverScreen = () => gameScreenManager.addGamePopUpScreen(new GameOverScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
        this.jewelManager = new JewelManager(8, 8, graphicsPath, this.sounds);
        this.graphicsPath = graphicsPath;
    }

    update(inputData: InputData): void {
        super.update(inputData);
        this.jewelManager.update(inputData);
        this.timer.timeInSecond += this.jewelManager.tempTime;
        this.timerText.text = this.timer.counterString;
        this.score += this.jewelManager.tempScore;
        this.scoreText.text = this.score.toString();
        if (this.timer.timeInSecond <= 0) {
            this.sounds.get("gameOverSound")?.play();
            fetch(`https://backend-yduns.ondigitalocean.app/high-score?point=${this.score}`, { method: "POST" }).catch(() => alert("Fel, kunde inte lagra data!"));
            this.showGameOverScreen();
        }
        if (!this.jewelManager.movePossible) {
            this.jewelManager = new JewelManager(8, 8, this.graphicsPath, this.sounds);
        }
    }

    draw(context: CanvasRenderingContext2D | null): void {
        super.draw(context);
        this.jewelManager.draw(context);
        this.scoreText.drawText(context, 70, 38, 50, 49);
        this.timerText.drawText(context, 70, 97, 50, 49);
    }
}
