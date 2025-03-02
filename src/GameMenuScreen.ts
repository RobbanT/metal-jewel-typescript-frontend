abstract class GameMenuScreen extends GameScreen {
    protected charsSprites: Map<string, Rectangle> = new Map();
    protected buttonArray: Button[] = new Array();

    constructor(gameScreenManager: GameScreenManager, graphicsPath: string, soundPath: string) {
        super(gameScreenManager, graphicsPath);
        this.charsSprites.set(" ", new Rectangle(8, 8, 10, 23));
        this.charsSprites.set("!", new Rectangle(26, 8, 10, 23));
        this.charsSprites.set("-", new Rectangle(242, 8, 13, 23));
        this.charsSprites.set("0", new Rectangle(8, 39, 27, 23));
        this.charsSprites.set("1", new Rectangle(43, 39, 15, 23));
        this.charsSprites.set("2", new Rectangle(66, 39, 27, 23));
        this.charsSprites.set("3", new Rectangle(101, 39, 27, 23));
        this.charsSprites.set("4", new Rectangle(136, 39, 27, 23));
        this.charsSprites.set("5", new Rectangle(171, 39, 27, 23));
        this.charsSprites.set("6", new Rectangle(206, 39, 27, 23));
        this.charsSprites.set("7", new Rectangle(241, 39, 27, 23));
        this.charsSprites.set("8", new Rectangle(276, 39, 27, 23));
        this.charsSprites.set("9", new Rectangle(311, 39, 27, 23));
        this.charsSprites.set(":", new Rectangle(345, 39, 9, 23));
        this.charsSprites.set("?", new Rectangle(434, 39, 27, 23));
        this.charsSprites.set("A", new Rectangle(26, 70, 27, 23));
        this.charsSprites.set("B", new Rectangle(61, 70, 27, 23));
        this.charsSprites.set("C", new Rectangle(96, 70, 27, 23));
        this.charsSprites.set("D", new Rectangle(131, 70, 27, 23));
        this.charsSprites.set("E", new Rectangle(166, 70, 27, 23));
        this.charsSprites.set("F", new Rectangle(201, 70, 27, 23));
        this.charsSprites.set("G", new Rectangle(236, 70, 27, 23));
        this.charsSprites.set("H", new Rectangle(271, 70, 27, 23));
        this.charsSprites.set("I", new Rectangle(306, 70, 9, 23));
        this.charsSprites.set("J", new Rectangle(323, 70, 27, 23));
        this.charsSprites.set("K", new Rectangle(358, 70, 27, 23));
        this.charsSprites.set("L", new Rectangle(393, 70, 27, 23));
        this.charsSprites.set("M", new Rectangle(428, 70, 27, 23));
        this.charsSprites.set("N", new Rectangle(463, 70, 27, 23));
        this.charsSprites.set("O", new Rectangle(498, 70, 27, 23));
        this.charsSprites.set("P", new Rectangle(8, 101, 27, 23));
        this.charsSprites.set("Q", new Rectangle(43, 101, 27, 23));
        this.charsSprites.set("R", new Rectangle(78, 101, 27, 23));
        this.charsSprites.set("S", new Rectangle(113, 101, 27, 23));
        this.charsSprites.set("T", new Rectangle(148, 101, 27, 23));
        this.charsSprites.set("U", new Rectangle(183, 101, 27, 23));
        this.charsSprites.set("V", new Rectangle(218, 101, 27, 23));
        this.charsSprites.set("W", new Rectangle(253, 101, 27, 23));
        this.charsSprites.set("X", new Rectangle(288, 101, 27, 23));
        this.charsSprites.set("Y", new Rectangle(323, 101, 27, 23));
        this.charsSprites.set("Z", new Rectangle(358, 101, 27, 23));
        this.charsSprites.set("a", new Rectangle(26, 132, 27, 23));
        this.charsSprites.set("b", new Rectangle(61, 132, 27, 23));
        this.charsSprites.set("c", new Rectangle(96, 132, 27, 23));
        this.charsSprites.set("d", new Rectangle(131, 132, 27, 23));
        this.charsSprites.set("e", new Rectangle(166, 132, 27, 23));
        this.charsSprites.set("f", new Rectangle(201, 132, 27, 23));
        this.charsSprites.set("g", new Rectangle(236, 132, 27, 23));
        this.charsSprites.set("h", new Rectangle(271, 132, 27, 23));
        this.charsSprites.set("i", new Rectangle(306, 132, 9, 23));
        this.charsSprites.set("j", new Rectangle(323, 132, 27, 23));
        this.charsSprites.set("k", new Rectangle(358, 132, 27, 23));
        this.charsSprites.set("l", new Rectangle(393, 132, 27, 23));
        this.charsSprites.set("m", new Rectangle(428, 132, 27, 23));
        this.charsSprites.set("n", new Rectangle(463, 132, 27, 23));
        this.charsSprites.set("o", new Rectangle(498, 132, 27, 23));
        this.charsSprites.set("p", new Rectangle(8, 163, 27, 23));
        this.charsSprites.set("q", new Rectangle(43, 163, 27, 23));
        this.charsSprites.set("r", new Rectangle(78, 163, 27, 23));
        this.charsSprites.set("s", new Rectangle(113, 163, 27, 23));
        this.charsSprites.set("t", new Rectangle(148, 163, 27, 23));
        this.charsSprites.set("u", new Rectangle(183, 163, 27, 23));
        this.charsSprites.set("v", new Rectangle(218, 163, 27, 23));
        this.charsSprites.set("w", new Rectangle(253, 163, 27, 23));
        this.charsSprites.set("x", new Rectangle(288, 163, 27, 23));
        this.charsSprites.set("y", new Rectangle(323, 163, 27, 23));
        this.charsSprites.set("z", new Rectangle(358, 163, 27, 23));
    }

    update(inputData: InputData): void {
        this.buttonArray.forEach((button) => button.update(inputData));
    }

    draw(context: CanvasRenderingContext2D | null): void {
        super.draw(context);
        this.buttonArray.forEach((button) => button.draw(context));
    }
}
