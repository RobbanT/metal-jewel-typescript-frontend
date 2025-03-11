class Game {
    private readonly gameWidth: number;
    private readonly gameHeight: number;
    private readonly graphicsPath: string;
    private readonly soundPath: string;
    private readonly canvas: Canvas;
    private readonly gameScreenManager: GameScreenManager;
    private gameScale: Vector;

    constructor(canvasId: string, gameWidth: number, gameHeight: number, graphicsPath: string, soundPath: string) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.graphicsPath = graphicsPath;
        this.soundPath = soundPath;
        this.gameScale = new Vector(1, 1);
        this.canvas = new Canvas(canvasId, gameWidth, gameHeight, this.gameScale);
        this.gameScreenManager = new GameScreenManager();
        this.gameScreenManager.addGameScreen(new GameMainMenuScreen(this.canvas, this.gameScreenManager, this.graphicsPath, this.soundPath));
        this.loopGame();

        window.addEventListener("resize", () => {
            var widthToHeight = gameWidth / gameHeight;
            var newWidth = window.innerWidth > gameWidth ? gameWidth : window.innerWidth;
            var newHeight = window.innerHeight > gameHeight ? gameHeight : window.innerHeight;
            var newWidthToHeight = newWidth / newHeight;

            if (newWidthToHeight > widthToHeight) {
                console.log("KÖR");
                newWidth = newHeight * widthToHeight;
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
                this.gameScale.x = this.canvas.width / gameWidth;
                this.gameScale.y = this.canvas.height / gameHeight;
            } else {
                console.log("KÖR");
                newHeight = newWidth / widthToHeight;
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
                this.gameScale.y = this.canvas.height / gameHeight;
                this.gameScale.x = this.canvas.width / gameWidth;
            }
            /*if (window.innerWidth < gameWidth) {
                this.canvas.width = window.innerWidth;
                this.gameScale.x = this.canvas.width / gameWidth;
                this.canvas.height = gameHeight * this.gameScale.x;
                this.gameScale.y = this.canvas.height / gameHeight;
            }
            if (window.innerHeight < gameHeight) {
                this.canvas.height = window.innerHeight;
                this.gameScale.y = this.canvas.height / gameHeight;
                this.canvas.width = gameWidth * this.gameScale.y;
                this.gameScale.x = this.canvas.width / gameWidth;
            }
            */
        });
        window.dispatchEvent(new Event("resize"));
    }

    update(): void {
        this.gameScreenManager.update(this.canvas.inputData);
        this.canvas.update();
    }

    draw(): void {
        this.canvas.draw(this.gameScale.x, this.gameScale.y);
        this.gameScreenManager.draw(this.canvas.context);
        this.canvas.context?.translate(0, 0);
        this.canvas.context?.restore();
    }

    loopGame(): void {
        this.update();
        this.draw();
        window.setTimeout(() => this.loopGame(), 1000 / 60);
    }
}
