"use strict";
class Jewel extends AnimatedSprite {
    constructor(rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping, startPosition, endPosition, speed) {
        super(rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping);
        this._checked = false;
        this._selected = false;
        this._scaling = false;
        this._moving = false;
        this._remove = false;
        this._scale = 1;
        this._color = Colors.blue;
        this.scaleEffect = new ScaleEffect(EffectStatus.DecreasingEffect, this, 0.01);
        this.moveEffect = new MoveEffect(EffectStatus.IncreasingEffect, this, startPosition, endPosition, speed);
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
    update() {
        super.update();
        this.scaleEffect.update();
        this.moveEffect.update();
    }
    draw(context) {
        context === null || context === void 0 ? void 0 : context.drawImage(this._image, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth * this._scale, this.frameHeight * this._scale);
    }
}
