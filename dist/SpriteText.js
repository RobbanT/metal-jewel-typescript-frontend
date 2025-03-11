"use strict";
class SpriteText extends Sprite {
    constructor(rectangle, src, text, textScale, charsSprites) {
        super(rectangle, src);
        this._text = text;
        this.textScale = textScale;
        this.charsSprites = charsSprites;
    }
    set text(text) {
        this._text = text;
    }
    drawText(context, x, y, width, height) {
        const chars = [...this._text];
        let totalWidth = 0;
        let tempWidth = 0;
        chars.forEach((c) => (totalWidth += this.charsSprites.get(c).width * this.textScale));
        chars.forEach((c) => {
            context === null || context === void 0 ? void 0 : context.drawImage(this._image, this.charsSprites.get(c).x, this.charsSprites.get(c).y, this.charsSprites.get(c).width, this.charsSprites.get(c).height, x + tempWidth + (width - totalWidth) / 2, y + (this.charsSprites.get(c).height * this.textScale) / 2 / this.textScale, this.charsSprites.get(c).width * this.textScale, this.charsSprites.get(c).height * this.textScale);
            tempWidth += this.charsSprites.get(c).width * this.textScale;
        });
    }
}
