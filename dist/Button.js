"use strict";
class Button extends Sprite {
    constructor(rectangle, src, shadeSrc, text, onClick, shadeOffset, textScaling) {
        super(rectangle, src);
        this._hovering = false;
        this._pressed = false;
        this._originalPosition = new Vector(rectangle.x, rectangle.y);
        this._shade = new Sprite(new Rectangle(rectangle.x, rectangle.y + shadeOffset, rectangle.width, rectangle.height), shadeSrc);
        this._text = text;
        this._onClick = onClick;
        this._spriteText = new SpriteText(new Rectangle(0, 0, 533, 194), "res/graphics/font.png", text, textScaling);
    }
    update(mousePosition, mouseDown, mouseClicked) {
        if (this.contains(mousePosition) && mouseClicked) {
            this._onClick();
            document.body.style.cursor = "auto";
        }
        else if (this.contains(mousePosition) && mouseDown) {
            this._pressed = true;
            this._hovering = false;
            this.y = this._originalPosition.y;
            document.body.style.cursor = "pointer";
        }
        else if (this.contains(mousePosition)) {
            this._hovering = true;
            this.y = this._originalPosition.y - 1;
            document.body.style.cursor = "pointer";
        }
        else if (this._hovering) {
            this._hovering = false;
            this.y = this._originalPosition.y;
            document.body.style.cursor = "auto";
        }
    }
    draw(context) {
        if (this._hovering) {
            this._shade.draw(context);
        }
        context.drawImage(this._image, this.origin.x, this.origin.y, this.width, this.height);
        this._spriteText.drawText(context, this.origin.x, this.origin.y, this.width, this.height);
    }
}
