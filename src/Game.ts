class Game {
    private readonly gameWidth: number;
    private readonly gameHeight: number;
    private readonly graphicsPath: string;
    private readonly soundPath: string;
    private readonly canvas: Canvas;
    private readonly gameScreenManager: GameScreenManager;

    constructor(canvasId: string, gameWidth: number, gameHeight: number, graphicsPath: string, soundPath: string) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.graphicsPath = graphicsPath;
        this.soundPath = soundPath;
        this.canvas = new Canvas(canvasId, gameWidth, gameHeight);
        this.gameScreenManager = new GameScreenManager();
        this.gameScreenManager.addGameScreen(new GameMainMenuScreen(this.canvas, this.gameScreenManager, this.graphicsPath, this.soundPath));
        this.loopGame();
    }

    update(): void {
        this.gameScreenManager.update(this.canvas.inputData);
        this.canvas.update();
    }

    draw(): void {
        this.canvas.draw();
        this.gameScreenManager.draw(this.canvas.context);
    }

    loopGame(): void {
        this.update();
        this.draw();
        window.setTimeout(() => this.loopGame(), 1000 / 60);
    }
}
