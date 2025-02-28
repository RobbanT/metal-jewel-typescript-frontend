abstract class GamePopUpScreen extends GameMenuScreen {
    protected backgroundShade: Sprite;

    constructor(gameScreenManager: GameScreenManager, graphicsPath: string) {
        super(gameScreenManager, graphicsPath);
        this.backgroundShade = new Sprite(new Rectangle(0, 0, 0, 0), "test");
    }

    draw(context: CanvasRenderingContext2D | null) {
        this.backgroundShade.draw(context);
        super.draw(context);
    }
}
