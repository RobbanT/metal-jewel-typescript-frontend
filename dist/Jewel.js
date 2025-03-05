"use strict";
class Jewel extends AnimatedSprite {
    constructor(jewelBackgroundSrc, rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping, startPosition, endPosition, speed) {
        super(rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping);
        this._checked = false;
        this._selected = false;
        this._scaling = false;
        this._moving = false;
        this._remove = false;
        this._scale = 1;
        this.hovering = false;
        this._color = Colors.blue;
        this._scaleEffect = new ScaleEffect(EffectStatus.EffectAtMax, this, 0.01);
        this._moveEffect = new MoveEffect(EffectStatus.IncreasingEffect, this, startPosition, endPosition, speed);
        this.jewelBackground = new Sprite(new Rectangle(this.x, this.y, 40, 40), jewelBackgroundSrc);
    }
    get color() {
        return this._color;
    }
    get checked() {
        return this._checked;
    }
    set checked(checked) {
        this._checked = checked;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
    }
    get scaling() {
        return this._scaling;
    }
    set scaling(scaling) {
        this._scaling = scaling;
    }
    get moving() {
        return this._moving;
    }
    set moving(moving) {
        this._moving = moving;
    }
    get remove() {
        return this._remove;
    }
    set remove(remove) {
        this._remove = remove;
    }
    get scale() {
        return this._scale;
    }
    set scale(scale) {
        this._scale = scale;
    }
    get scaleEffect() {
        return this._scaleEffect;
    }
    get moveEffect() {
        return this._moveEffect;
    }
    setNewMovePosition(effectStatus, endPosition, speed) {
        this._moveEffect = new MoveEffect(effectStatus, this, this.position, endPosition, speed);
    }
    updateJewel(inputData) {
        super.update();
        this._scaleEffect.update();
        this._moveEffect.update();
        this.jewelBackground.position = this.position;
        if (!this._scaling && !this._moving) {
            if ((this.collisionRectangle.contains(inputData.position) && inputData.mouseClicked) || inputData.touchEnded) {
                this._selected = this._selected ? false : true;
                document.body.style.cursor = "auto";
            }
            else if (this.collisionRectangle.contains(inputData.position)) {
                this.hovering = true;
                this.playAnimation();
                document.body.style.cursor = "pointer";
            }
            else if (this.hovering) {
                this.hovering = false;
                this.restartAnimation();
                this.pausAnimation();
                document.body.style.cursor = "auto";
            }
        }
    }
    draw(context) {
        if (this._selected) {
            this.jewelBackground.draw(context);
        }
        context === null || context === void 0 ? void 0 : context.drawImage(this._image, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight, this.x - this.frameWidth / 2, this.y - this.frameHeight / 2, this.frameWidth * this._scale, this.frameHeight * this._scale);
    }
}
