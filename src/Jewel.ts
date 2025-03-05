class Jewel extends AnimatedSprite {
    private jewelBackground: Sprite;
    private _color: Colors;
    private _checked: boolean = false;
    private _selected: boolean = false;
    private _scaling: boolean = false;
    private _moving: boolean = false;
    private _remove: boolean = false;
    private _scale: number = 1;
    private hovering: boolean = false;
    private _scaleEffect: ScaleEffect;
    private _moveEffect: MoveEffect;

    constructor(
        jewelBackgroundSrc: string,
        rectangle: Rectangle,
        src: string,
        frames: number,
        animationPlaying: boolean,
        millisecondsPerFrame: number,
        looping: boolean,
        startPosition: Vector,
        endPosition: Vector,
        speed: Vector
    ) {
        super(rectangle, src, frames, animationPlaying, millisecondsPerFrame, looping);
        this._color = Colors.blue;
        this._scaleEffect = new ScaleEffect(EffectStatus.EffectAtMax, this, 0.01);
        this._moveEffect = new MoveEffect(EffectStatus.IncreasingEffect, this, startPosition, endPosition, speed);
        this.jewelBackground = new Sprite(new Rectangle(this.x, this.y, 40, 40), jewelBackgroundSrc);
    }

    get color(): Colors {
        return this._color;
    }

    get checked(): boolean {
        return this._checked;
    }

    set checked(checked: boolean) {
        this._checked = checked;
    }

    get selected(): boolean {
        return this._selected;
    }

    set selected(selected: boolean) {
        this._selected = selected;
    }

    get scaling(): boolean {
        return this._scaling;
    }

    set scaling(scaling: boolean) {
        this._scaling = scaling;
    }

    get moving(): boolean {
        return this._moving;
    }

    set moving(moving: boolean) {
        this._moving = moving;
    }

    get remove(): boolean {
        return this._remove;
    }

    set remove(remove: boolean) {
        this._remove = remove;
    }

    get scale(): number {
        return this._scale;
    }

    set scale(scale: number) {
        this._scale = scale;
    }

    get scaleEffect(): ScaleEffect {
        return this._scaleEffect;
    }

    get moveEffect(): MoveEffect {
        return this._moveEffect;
    }

    setNewMovePosition(effectStatus: EffectStatus, endPosition: Vector, speed: Vector) {
        this._moveEffect = new MoveEffect(effectStatus, this, this.position, endPosition, speed);
    }

    updateJewel(inputData: InputData): void {
        super.update();
        this._scaleEffect.update();
        this._moveEffect.update();
        this.jewelBackground.position = this.position;

        if (!this._scaling && !this._moving) {
            if ((this.collisionRectangle.contains(inputData.position) && inputData.mouseClicked) || inputData.touchEnded) {
                this._selected = this._selected ? false : true;
                document.body.style.cursor = "auto";
            } else if (this.collisionRectangle.contains(inputData.position)) {
                this.hovering = true;
                this.playAnimation();
                document.body.style.cursor = "pointer";
            } else if (this.hovering) {
                this.hovering = false;
                this.restartAnimation();
                this.pausAnimation();
                document.body.style.cursor = "auto";
            }
        }
    }

    draw(context: CanvasRenderingContext2D | null) {
        if (this._selected) {
            this.jewelBackground.draw(context);
        }
        context?.drawImage(
            this._image,
            this.frameWidth * this.frameIndex,
            0,
            this.frameWidth,
            this.frameHeight,
            this.x - this.frameWidth / 2,
            this.y - this.frameHeight / 2,
            this.frameWidth * this._scale,
            this.frameHeight * this._scale
        );
    }
}
