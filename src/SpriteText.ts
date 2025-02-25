class SpriteText extends Sprite {
    static _chars: Map<string, Rectangle> = new Map();
    static initialize() {
        this._chars.set(" ", new Rectangle(8, 8.5, 10, 23));
        this._chars.set("!", new Rectangle(26, 8.5, 10, 23));
        this._chars.set("-", new Rectangle(242, 8.5, 13, 23));
        this._chars.set("0", new Rectangle(8, 39, 27, 23));
        this._chars.set("1", new Rectangle(43, 39, 15, 23));
        this._chars.set("2", new Rectangle(66, 39, 27, 23));
        this._chars.set("3", new Rectangle(101, 39, 27, 23));
        this._chars.set("4", new Rectangle(136, 39, 27, 23));
        this._chars.set("5", new Rectangle(171, 39, 27, 23));
        this._chars.set("6", new Rectangle(206, 39, 27, 23));
        this._chars.set("7", new Rectangle(241, 39, 27, 23));
        this._chars.set("8", new Rectangle(276, 39, 27, 23));
        this._chars.set("9", new Rectangle(311, 39, 27, 23));
        this._chars.set(":", new Rectangle(319, 39, 9, 23));
        this._chars.set("?", new Rectangle(434, 39, 27, 23));
        this._chars.set("A", new Rectangle(26, 70.5, 27, 23));
        this._chars.set("B", new Rectangle(61, 70.5, 27, 23));
        this._chars.set("C", new Rectangle(96, 70.5, 27, 23));
        this._chars.set("D", new Rectangle(131, 70.5, 27, 23));
        this._chars.set("E", new Rectangle(166, 70.5, 27, 23));
        this._chars.set("F", new Rectangle(201, 70.5, 27, 23));
        this._chars.set("G", new Rectangle(236, 70.5, 27, 23));
        this._chars.set("H", new Rectangle(271, 70.5, 27, 23));
        this._chars.set("I", new Rectangle(306, 70.5, 9, 23));
        this._chars.set("J", new Rectangle(323, 70.5, 27, 23));
        this._chars.set("K", new Rectangle(358, 70.5, 27, 23));
        this._chars.set("L", new Rectangle(393, 70.5, 27, 23));
        this._chars.set("M", new Rectangle(428, 70.5, 27, 23));
        this._chars.set("N", new Rectangle(463, 70.5, 27, 23));
        this._chars.set("O", new Rectangle(498, 70.5, 27, 23));
        this._chars.set("P", new Rectangle(8, 101.5, 27, 23));
        this._chars.set("Q", new Rectangle(43, 101.5, 27, 23));
        this._chars.set("R", new Rectangle(78, 101.5, 27, 23));
        this._chars.set("S", new Rectangle(113, 101.5, 27, 23));
        this._chars.set("T", new Rectangle(148, 101.5, 27, 23));
        this._chars.set("U", new Rectangle(183, 101.5, 27, 23));
        this._chars.set("V", new Rectangle(218, 101.5, 27, 23));
        this._chars.set("W", new Rectangle(253, 101.5, 27, 23));
        this._chars.set("X", new Rectangle(288, 101.5, 27, 23));
        this._chars.set("Y", new Rectangle(323, 101.5, 27, 23));
        this._chars.set("Z", new Rectangle(358, 101.5, 27, 23));
        this._chars.set("a", new Rectangle(26, 132.5, 27, 23));
        this._chars.set("b", new Rectangle(61, 132.5, 27, 23));
        this._chars.set("c", new Rectangle(96, 132.5, 27, 23));
        this._chars.set("d", new Rectangle(131, 132.5, 27, 23));
        this._chars.set("e", new Rectangle(166, 132.5, 27, 23));
        this._chars.set("f", new Rectangle(201, 132.5, 27, 23));
        this._chars.set("g", new Rectangle(236, 132.5, 27, 23));
        this._chars.set("h", new Rectangle(271, 132.5, 27, 23));
        this._chars.set("i", new Rectangle(306, 132.5, 9, 23));
        this._chars.set("j", new Rectangle(323, 132.5, 27, 23));
        this._chars.set("k", new Rectangle(358, 132.5, 27, 23));
        this._chars.set("l", new Rectangle(393, 132.5, 27, 23));
        this._chars.set("m", new Rectangle(428, 132.5, 27, 23));
        this._chars.set("n", new Rectangle(463, 132.5, 27, 23));
        this._chars.set("o", new Rectangle(498, 132.5, 27, 23));
        this._chars.set("p", new Rectangle(8, 163.5, 27, 23));
        this._chars.set("q", new Rectangle(43, 163.5, 27, 23));
        this._chars.set("r", new Rectangle(78, 163.5, 27, 23));
        this._chars.set("s", new Rectangle(113, 163.5, 27, 23));
        this._chars.set("t", new Rectangle(148, 163.5, 27, 23));
        this._chars.set("u", new Rectangle(183, 163.5, 27, 23));
        this._chars.set("v", new Rectangle(218, 163.5, 27, 23));
        this._chars.set("w", new Rectangle(253, 163.5, 27, 23));
        this._chars.set("x", new Rectangle(288, 163.5, 27, 23));
        this._chars.set("y", new Rectangle(323, 163.5, 27, 23));
        this._chars.set("z", new Rectangle(358, 163.5, 27, 23));
    }

    private _text: string;

    constructor(rectangle: Rectangle, src: string, text: string) {
        super(rectangle, src);
        this._text = text;
    }

    draw(context: CanvasRenderingContext2D | null) {}

    drawText(context: CanvasRenderingContext2D | null, x: number, y: number, width: number, height: number) {
        const chars = [...this._text];
        let totalWidth = 0;
        chars.forEach((c, i) => (totalWidth += SpriteText._chars.get(c)!.width));
        console.log(totalWidth);
        let tempWidth: number = 0;
        chars.forEach((c, i) => {
            context?.drawImage(
                this._image,
                SpriteText._chars.get(c)!.x,
                SpriteText._chars.get(c)!.y,
                SpriteText._chars.get(c)!.width,
                SpriteText._chars.get(c)!.height,
                x + tempWidth + (width - totalWidth) / 2,
                y + SpriteText._chars.get(c)!.height / 2,
                SpriteText._chars.get(c)!.width,
                SpriteText._chars.get(c)!.height
            );
            tempWidth += SpriteText._chars.get(c)!.width;
        });
    }
}
