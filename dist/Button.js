"use strict";
class Button extends Sprite {
    constructor(rectangle, src, shadeSrc, fontSrc, text, onClick, shadeOffset, textScaling, charsSprites) {
        super(rectangle, src);
        this.hovering = false;
        this.pressed = false;
        this.originalPosition = new Vector(rectangle.x, rectangle.y);
        this.shade = new Sprite(new Rectangle(rectangle.x, rectangle.y + shadeOffset, rectangle.width, rectangle.height), shadeSrc);
        this.text = text;
        this.onClick = onClick;
        this.spriteText = new SpriteText(new Rectangle(0, 0, 533, 194), fontSrc, text, textScaling, charsSprites);
    }
    update(inputData) {
        if (this.contains(inputData.position) && inputData.mouseClicked) {
            this.onClick();
            document.body.style.cursor = "auto";
        }
        else if (this.contains(inputData.position) && inputData.mouseDown) {
            this.pressed = true;
            this.hovering = false;
            this.y = this.originalPosition.y;
            document.body.style.cursor = "pointer";
        }
        else if (this.contains(inputData.position)) {
            this.hovering = true;
            this.y = this.originalPosition.y - 1;
            document.body.style.cursor = "pointer";
        }
        else if (this.hovering) {
            this.hovering = false;
            this.y = this.originalPosition.y;
            document.body.style.cursor = "auto";
        }
    }
    draw(context) {
        if (this.hovering) {
            this.shade.draw(context);
        }
        context.drawImage(this._image, this.origin.x, this.origin.y, this.width, this.height);
        this.spriteText.drawText(context, this.origin.x, this.origin.y, this.width, this.height);
    }
}
