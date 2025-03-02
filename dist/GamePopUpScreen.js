"use strict";
class GamePopUpScreen extends GameMenuScreen {
    constructor(gameScreenManager, graphicsPath, soundPath) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.backgroundShade = new Sprite(new Rectangle(0, 0, 0, 0), "test");
    }
    draw(context) {
        this.backgroundShade.draw(context);
        super.draw(context);
    }
}
