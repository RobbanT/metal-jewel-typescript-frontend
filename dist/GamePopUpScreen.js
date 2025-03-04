"use strict";
class GamePopUpScreen extends GameMenuScreen {
    constructor(canvas, gameScreenManager, graphicsPath, soundPath) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.backgroundShade = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}background-shade.png`);
    }
    draw(context) {
        this.backgroundShade.draw(context);
        super.draw(context);
    }
}
