class SpriteText extends Sprite {
    private _text: string;
    private textScale: number;
    private charsSprites: Map<string, Rectangle>;

    constructor(rectangle: Rectangle, src: string, text: string, textScale: number, charsSprites: Map<string, Rectangle>) {
        super(rectangle, src);
        this._text = text;
        this.textScale = textScale;
        this.charsSprites = charsSprites;
    }

    set text(text: string) {
        this._text = text;
    }

    drawText(context: CanvasRenderingContext2D | null, x: number, y: number, width: number, height: number) {
        const chars = [...this._text];
        let totalWidth: number = 0;
        let tempWidth: number = 0;
        chars.forEach((c) => (totalWidth += this.charsSprites.get(c)!.width * this.textScale));
        chars.forEach((c) => {
            context?.drawImage(
                this._image,
                this.charsSprites.get(c)!.x,
                this.charsSprites.get(c)!.y,
                this.charsSprites.get(c)!.width,
                this.charsSprites.get(c)!.height,
                x + tempWidth + (width - totalWidth) / 2,
                y + (this.charsSprites.get(c)!.height * this.textScale) / 2 / this.textScale,
                this.charsSprites.get(c)!.width * this.textScale,
                this.charsSprites.get(c)!.height * this.textScale
            );
            tempWidth += this.charsSprites.get(c)!.width * this.textScale;
        });
    }
}
