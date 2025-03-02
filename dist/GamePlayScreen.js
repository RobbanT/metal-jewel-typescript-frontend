"use strict";
class GamePlayScreen extends GameMenuScreen {
    constructor(canvas, gameScreenManager, graphicsPath, soundPath) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.score = 0;
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}game-screen-background.png`);
        this.scoreText = new SpriteText(new Rectangle(0, 0, 533, 194), "res/graphics/font.png", `${this.score}`, 0.5, this.charsSprites);
        this.buttonArray.push(new Button(new Rectangle(96, canvas.origin.y + 149, 112, 30), `${graphicsPath}small-button.png`, `${graphicsPath}small-button-shade.png`, `${graphicsPath}font.png`, "Menu", () => { }, 2, 0.5, this.charsSprites));
    }
    update(inpuData) {
        super.update(inpuData);
        fetch("https://backend-yduns.ondigitalocean.app/high-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ point: this.score }),
        }).catch(() => alert("Fel, kunde inte lagra data!"));
    }
    draw(context) {
        super.draw(context);
        this.scoreText.drawText(context, 70, 97, 50, 49);
    }
}
