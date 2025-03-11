abstract class GamePopUpScreen extends GameMenuScreen {
    private backgroundShade: Sprite;

    constructor(canvas: Canvas, gameScreenManager: GameScreenManager, graphicsPath: string, soundPath: string) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.backgroundShade = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}background-shade.png`);
    }

    draw(context: CanvasRenderingContext2D | null) {
        this.backgroundShade.draw(context);
        super.draw(context);
    }
}
