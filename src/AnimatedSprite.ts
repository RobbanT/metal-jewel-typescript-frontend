class AnimatedSprite extends Sprite {
    protected sourceRectangles: Rectangle[] = new Array();
    protected frameIndex: number = 0;
    protected frameWidth: number;
    protected frameHeight: number;
    protected animationPlaying: boolean;
    private timeSinceLastFrame: number = Date.now();
    private millisecondsPerFrame: number;
    private looping: boolean;

    constructor(rectangle: Rectangle, src: string, frames: number, animationPlaying: boolean, millisecondsPerFrame: number, looping: boolean) {
        super(rectangle, src);
        this.frameWidth = this._image.width / frames;
        this.frameHeight = this._image.height;
        for (let i: number = 0; i < frames; i++) {
            this.sourceRectangles.push(new Rectangle(i * this.frameWidth, 0, this.frameWidth, this.frameHeight));
        }
        this.animationPlaying = animationPlaying;
        this.millisecondsPerFrame = millisecondsPerFrame;
        this.looping = looping;
    }

    get CollisionRectangle(): Rectangle {
        return new Rectangle(this.x - this.frameWidth / 2, this.y - this.frameHeight / 2, this.frameWidth, this.frameHeight);
    }

    changeFrameTo(frameIndex: number) {
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

    draw(context: CanvasRenderingContext2D | null) {
        context?.drawImage(this._image, this.x, this.y, this.width, this.height, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight);
    }
}
