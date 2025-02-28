abstract class GameMenuScreen extends GameScreen {
    protected buttonArray: Button[] = new Array();

    constructor(gameScreenManager: GameScreenManager, graphicsPath: string) {
        super(gameScreenManager, graphicsPath);
    }

    update(mousePosition: Vector, mouseDown: boolean, mouseClicked: boolean): void {
        this.buttonArray.forEach((button) => button.update(mousePosition, mouseDown, mouseClicked));
    }

    draw(context: CanvasRenderingContext2D | null): void {
        super.draw(context);
        this.buttonArray.forEach((button) => button.draw(context));
    }
}
