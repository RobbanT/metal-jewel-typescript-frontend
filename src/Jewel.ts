class Jewel extends AnimatedSprite {
    private _color: Colors;
    private _checked: boolean = false;
    private _selected: boolean = false;
    private _scaling: boolean = false;
    private _moving: boolean = false;
    private _remove: boolean = false;
    private _scale: number = 1;
    private scaleEffect: ScaleEffect;
    private moveEffect: MoveEffect;

    constructor(
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
        this.scaleEffect = new ScaleEffect(EffectStatus.DecreasingEffect, this, 0.01);
        this.moveEffect = new MoveEffect(EffectStatus.IncreasingEffect, this, startPosition, endPosition, speed);
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

    update(): void {
        super.update();
        this.scaleEffect.update();
        this.moveEffect.update();
    }

    draw(context: CanvasRenderingContext2D | null) {
        context?.drawImage(this._image, this.frameWidth * this.frameIndex, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth * this._scale, this.frameHeight * this._scale);
    }
}
