"use strict";
class GameMainMenuScreen extends GameMenuScreen {
    constructor(canvas, gameScreenManager, graphicsPath) {
        super(gameScreenManager, graphicsPath);
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}main-menu-background.png`);
        this.leftJewel = new Sprite(new Rectangle(75, 75, 30, 30), `${graphicsPath}${Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)]}-jewel-concave.png`);
        this.rightJewel = new Sprite(new Rectangle(489, 75, 30, 30), `${graphicsPath}${Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)]}-jewel-concave.png`);
        this.buttonArray.push(new Button(new Rectangle(canvas.origin.x, canvas.origin.y - 22, 230, 45), `${graphicsPath}big-button.png`, `${graphicsPath}big-button-shade.png`, "Play", () => gameScreenManager.changeGameScreen(new GamePlayScreen(canvas, gameScreenManager, graphicsPath), this), 7, 1));
        this.buttonArray.push(new Button(new Rectangle(canvas.origin.x, canvas.origin.y + 58, 230, 45), `${graphicsPath}big-button.png`, `${graphicsPath}big-button-shade.png`, "Hi-Score", () => gameScreenManager.changeGameScreen(new GameHiScoreScreen(canvas, gameScreenManager, graphicsPath), this), 7, 1));
        this.buttonArray.push(new Button(new Rectangle(canvas.origin.x, canvas.origin.y + 138, 230, 45), `${graphicsPath}big-button.png`, `${graphicsPath}big-button-shade.png`, "GitHub", () => open("https://github.com/RobbanT/metal-jewel-typescript-frontend", "_self").close(), 7, 1));
    }
    draw(context) {
        super.draw(context);
        this.leftJewel.draw(context);
        this.rightJewel.draw(context);
    }
}
