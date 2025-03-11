class AnimatedSprite extends Sprite {
    protected sourceRectangles: Rectangle[] = new Array();
    protected frameIndex: number = 0;
    protected frameWidth: number;
    protected frameHeight: number;
    protected animationPlaying: boolean;
    private timeSinceLastFrame: number = 0;
    private timeSinceLastUpdate: number = 0;
    private millisecondsPerFrame: number;
    private looping: boolean;

    constructor(rectangle: Rectangle, src: string, frames: number, animationPlaying: boolean, millisecondsPerFrame: number, looping: boolean) {
        super(rectangle, src);
        this.frameWidth = rectangle.width / frames;
        this.frameHeight = rectangle.height;
        for (let i: number = 0; i < frames; i++) {
            this.sourceRectangles.push(new Rectangle(i * this.frameWidth, 0, this.frameWidth, this.frameHeight));
        }
        this.animationPlaying = animationPlaying;
        this.millisecondsPerFrame = millisecondsPerFrame;
        this.looping = looping;
    }

    get collisionRectangle(): Rectangle {
        return new Rectangle(this.x, this.y, this.frameWidth, this.frameHeight);
    }

    playAnimation() {
        this.animationPlaying = true;
    }

    pausAnimation() {
        this.animationPlaying = false;
    }

    restartAnimation() {
        this.frameIndex = 0;
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
                this.restartAnimation();
                return;
            }
            this.frameIndex++;
        }
    }

    draw(context: CanvasRenderingContext2D | null) {
        context?.drawImage(this._image, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);
    }
}
