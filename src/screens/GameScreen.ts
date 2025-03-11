abstract class GameScreen {
    protected gameScreenManager: GameScreenManager;
    protected covered = false;
    protected background: Sprite | null = null;
    private _running: boolean = true;

    constructor(gameScreenManager: GameScreenManager, graphicsPath: string) {
        this.gameScreenManager = gameScreenManager;
    }

    isCovered(): boolean {
        return this.covered;
    }

    cover(): void {
        this.covered = true;
    }

    unCover(): void {
        this.covered = false;
    }

    get running(): boolean {
        return this._running;
    }

    set running(running: boolean) {
        this._running = running;
    }

    update(inputData: InputData) {}

    draw(context: CanvasRenderingContext2D | null): void {
        context!.drawImage(this.background!.image, this.background!.origin.x, this.background!.origin.y, this.background!.width, this.background!.height);
    }
}
