class Button extends Sprite {
    private _originalPosition: Vector;
    private _text: string;
    private _hovering: boolean = false;
    private _pressed: boolean = false;
    private _shade: Sprite;
    private _onClick: Function;
    private _spriteText: SpriteText;

    constructor(rectangle: Rectangle, src: string, shadeSrc: string, text: string, onClick: Function, shadeOffset: number, textScaling: number) {
        super(rectangle, src);
        this._originalPosition = new Vector(rectangle.x, rectangle.y);
        this._shade = new Sprite(new Rectangle(rectangle.x, rectangle.y + shadeOffset, rectangle.width, rectangle.height), shadeSrc);
        this._text = text;
        this._onClick = onClick;
        this._spriteText = new SpriteText(new Rectangle(0, 0, 533, 194), "res/graphics/font.png", text, textScaling);
    }

    update(mousePosition: Vector, mouseDown: boolean, mouseClicked: boolean) {
        if (this.contains(mousePosition) && mouseClicked) {
            this._onClick();
            mouseClicked = false;
        } else if (this.contains(mousePosition) && mouseDown) {
            this._pressed = true;
            this._hovering = false;
            this.y = this._originalPosition.y;
            document.body.style.cursor = "pointer";
        } else if (this.contains(mousePosition)) {
            this._hovering = true;
            this.y = this._originalPosition.y - 1;
            document.body.style.cursor = "pointer";
        } else if (this._hovering) {
            this._hovering = false;
            this.y = this._originalPosition.y;
            document.body.style.cursor = "auto";
        }
    }

    draw(context: CanvasRenderingContext2D | null) {
        if (this._hovering) {
            this._shade.draw(context);
        }
        context!.drawImage(this._image, this.origin.x, this.origin.y, this.width, this.height);
        this._spriteText.drawText(context, this.origin.x, this.origin.y, this.width, this.height);
    }
}
