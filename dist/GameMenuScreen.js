"use strict";
class GameMenuScreen extends GameScreen {
    constructor(gameScreenManager, graphicsPath) {
        super(gameScreenManager, graphicsPath);
        this.buttonArray = new Array();
    }
    update(mousePosition, mouseDown, mouseClicked) {
        this.buttonArray.forEach((button) => button.update(mousePosition, mouseDown, mouseClicked));
    }
    draw(context) {
        super.draw(context);
        this.buttonArray.forEach((button) => button.draw(context));
    }
}
