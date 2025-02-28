"use strict";
class GamePopUpScreen extends GameMenuScreen {
    constructor(gameScreenManager, background, backgroundShade) {
        super(gameScreenManager, background);
        this.backgroundShade = backgroundShade;
    }
    draw(context) {
        this.backgroundShade.draw(context);
        super.draw(context);
    }
}
