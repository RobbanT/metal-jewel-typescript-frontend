"use strict";
class AnimatedSprite extends Sprite {
    constructor(rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping) {
        super(rectangle, src);
        this.sourceRectangles = new Array();
        this.frameIndex = 0;
        this.timeSinceLastFrame = 0;
        this.timeSinceLastUpdate = 0;
        this.frameWidth = rectangle.width / frames;
        this.frameHeight = rectangle.height;
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
    playAnimation() {
        this.animationPlaying = true;
    }
    pausAnimation() {
        this.animationPlaying = false;
    }
    update() {
        this.timeSinceLastFrame += Date.now() - this.timeSinceLastUpdate;
        this.timeSinceLastUpdate = Date.now();
        if (this.animationPlaying && this.timeSinceLastFrame >= this.millisecondsPerFrame) {
            this.timeSinceLastFrame = 0;
            if (this.frameIndex == this.sourceRectangles.length - 1) {
                if (!this.looping) {
                    this.pausAnimation();
                }
                this.frameIndex = 0;
                return;
            }
            this.frameIndex++;
        }
    }
    draw(context) {
        context === null || context === void 0 ? void 0 : context.drawImage(this._image, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }
}
