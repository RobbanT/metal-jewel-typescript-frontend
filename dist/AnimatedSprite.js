"use strict";
class AnimatedSprite extends Sprite {
    constructor(rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping) {
        super(rectangle, src);
        this.sourceRectangles = new Array();
        this.frameIndex = 0;
        this.timeSinceLastFrame = Date.now();
        this.frameWidth = this._image.width / frames;
        this.frameHeight = this._image.height;
        for (let i = 0; i < frames; i++) {
            this.sourceRectangles.push(new Rectangle(i * this.frameWidth, 0, this.frameWidth, this.frameHeight));
        }
        this.animationPlaying = animationPlaying;
        this.millisecondsPerFrame = millisecondsPerFrame;
        this.looping = looping;
    }
    get CollisionRectangle() {
        return new Rectangle(this.x - this.frameWidth / 2, this.y - this.frameHeight / 2, this.frameWidth, this.frameHeight);
    }
    changeFrameTo(frameIndex) {
        this.frameIndex = frameIndex;
    }
    playAnimation() {
        this.animationPlaying = true;
    }
    pausAnimation() {
        this.animationPlaying = false;
    }
    resetAnimation() {
        this.frameIndex = 0;
    }
    update() {
        this.timeSinceLastFrame += Date.now() - this.timeSinceLastFrame;
        if (this.animationPlaying && this.timeSinceLastFrame >= this.millisecondsPerFrame) {
            this.timeSinceLastFrame = 0;
            if (this.frameIndex == this.sourceRectangles.length - 1) {
                if (!this.looping) {
                    this.pausAnimation();
                }
                this.resetAnimation();
                return;
            }
            this.frameIndex++;
        }
    }
    draw(context) {
        context === null || context === void 0 ? void 0 : context.drawImage(this._image, this.x, this.y, this.width, this.height, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight);
    }
}
