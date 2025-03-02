class Button extends Sprite {
    private readonly originalPosition: Vector;
    private readonly text: string;
    private hovering: boolean = false;
    private pressed: boolean = false;
    private readonly shade: Sprite;
    private readonly onClick: Function;
    private readonly spriteText: SpriteText;

    constructor(rectangle: Rectangle, src: string, shadeSrc: string, fontSrc: string, text: string, onClick: Function, shadeOffset: number, textScaling: number, charsSprites: Map<string, Rectangle>) {
        super(rectangle, src);
        this.originalPosition = new Vector(rectangle.x, rectangle.y);
        this.shade = new Sprite(new Rectangle(rectangle.x, rectangle.y + shadeOffset, rectangle.width, rectangle.height), shadeSrc);
        this.text = text;
        this.onClick = onClick;
        this.spriteText = new SpriteText(new Rectangle(0, 0, 533, 194), fontSrc, text, textScaling, charsSprites);
    }

    update(inputData: InputData) {
        if (this.contains(inputData.position) && inputData.mouseClicked) {
            this.onClick();
            document.body.style.cursor = "auto";
        } else if (this.contains(inputData.position) && inputData.mouseDown) {
            this.pressed = true;
            this.hovering = false;
            this.y = this.originalPosition.y;
            document.body.style.cursor = "pointer";
        } else if (this.contains(inputData.position)) {
            this.hovering = true;
            this.y = this.originalPosition.y - 1;
            document.body.style.cursor = "pointer";
        } else if (this.hovering) {
            this.hovering = false;
            this.y = this.originalPosition.y;
            document.body.style.cursor = "auto";
        }
    }

    draw(context: CanvasRenderingContext2D | null) {
        if (this.hovering) {
            this.shade.draw(context);
        }
        context!.drawImage(this._image, this.origin.x, this.origin.y, this.width, this.height);
        this.spriteText.drawText(context, this.origin.x, this.origin.y, this.width, this.height);
    }
}
