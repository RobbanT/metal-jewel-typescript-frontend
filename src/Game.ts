class Game {
    private readonly graphicsPath: string;
    private readonly soundPath: string;
    private readonly canvas: Canvas;
    private readonly gameScreenManager: GameScreenManager;

    constructor(canvasId: string, canvasWidth: number, canvasHeight: number, graphicsPath: string, soundPath: string) {
        this.canvas = new Canvas(canvasId, canvasWidth, canvasHeight);
        this.graphicsPath = graphicsPath;
        this.soundPath = soundPath;
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
