class Sprite extends Rectangle {
    protected _image: HTMLImageElement;

    constructor(rectangle: Rectangle, src: string) {
        super(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        this._image = new Image();
        this._image.width = this.width;
        this._image.height = this.height;
        this._image.src = src;
    }

    draw(context: CanvasRenderingContext2D | null) {
        context!.drawImage(this._image, this.origin.x, this.origin.y, this.width, this.height);
    }
}
