"use strict";
class GamePlayScreen extends GameMenuScreen {
    constructor(canvas, gameScreenManager, graphicsPath, soundPath) {
        var _a;
        super(gameScreenManager, graphicsPath, soundPath);
        this.score = 0;
        this.sounds = new Map();
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}game-screen-background.png`);
        this.scoreText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.score}`, 0.5, this.charsSprites);
        this.sounds.set("backgroundMusic", new Sound(`${soundPath}background-music.mp3`, 0.1, true));
        this.sounds.set("buttonSound", new Sound(`${soundPath}button.mp3`));
        this.sounds.set("clusterSound", new Sound(`${soundPath}clustor.mp3`));
        this.sounds.set("gameOverSound", new Sound(`${soundPath}game-over.mp3`));
        this.sounds.set("newJewelsSound", new Sound(`${soundPath}new-jewels.mp3`));
        this.sounds.set("sevenClusterSound", new Sound(`${soundPath}seven-cluster.mp3`));
        this.sounds.set("switchSound", new Sound(`${soundPath}switch.mp3`));
        (_a = this.sounds.get("backgroundMusic")) === null || _a === void 0 ? void 0 : _a.play();
        this.buttonArray.push(new Button(new Rectangle(96, canvas.origin.y + 149, 112, 30), `${graphicsPath}small-button.png`, `${graphicsPath}small-button-shade.png`, `${graphicsPath}font.png`, "Menu", () => { }, 2, 0.5, this.charsSprites));
    }
    update(inpuData) {
        super.update(inpuData);
        /* fetch("https://backend-yduns.ondigitalocean.app/high-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ point: this.score }),
        }).catch(() => alert("Fel, kunde inte lagra data!"));
        */
    }
    draw(context) {
        super.draw(context);
        this.scoreText.drawText(context, 70, 97, 50, 49);
    }
}
