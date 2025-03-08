"use strict";
class GamePlayScreen extends GameMenuScreen {
    constructor(canvas, gameScreenManager, graphicsPath, soundPath) {
        super(gameScreenManager, graphicsPath, soundPath);
        this.score = 0;
        this.timer = new Timer();
        this.sounds = new Map();
        this.background = new Sprite(new Rectangle(canvas.origin.x, canvas.origin.y, 564, 406), `${graphicsPath}game-screen-background.png`);
        this.timerText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.timer.counterString}`, 0.45, this.charsSprites);
        this.scoreText = new SpriteText(new Rectangle(0, 0, 533, 194), `${graphicsPath}font.png`, `${this.score}`, 0.45, this.charsSprites);
        this.sounds.set("buttonSound", new Sound(`${soundPath}button.wav`));
        this.sounds.set("clusterSound", new Sound(`${soundPath}cluster.wav`));
        this.sounds.set("gameOverSound", new Sound(`${soundPath}game-over.wav`));
        this.sounds.set("newJewelsSound", new Sound(`${soundPath}new-jewels.wav`));
        this.sounds.set("sevenClusterSound", new Sound(`${soundPath}seven-cluster.wav`));
        this.sounds.set("switchSound", new Sound(`${soundPath}switch.wav`));
        this.buttonArray.push(new Button(new Rectangle(96, canvas.origin.y + 149, 112, 30), `${graphicsPath}small-button.png`, `${graphicsPath}small-button-shade.png`, `${graphicsPath}font.png`, "Menu", () => {
            this.timer.pauseTimer();
            gameScreenManager.addGamePopUpScreen(new GamePauseScreen(canvas, gameScreenManager, graphicsPath, soundPath, this.timer), this);
        }, 2, 0.4, this.charsSprites));
        this.showGameOverScreen = () => gameScreenManager.addGamePopUpScreen(new GameOverScreen(canvas, gameScreenManager, graphicsPath, soundPath), this);
        this.jewelManager = new JewelManager(graphicsPath, 8, 8);
    }
    update(inputData) {
        var _a;
        super.update(inputData);
        this.jewelManager.update(inputData);
        this.timer.timeInSecond += this.jewelManager.tempTime;
        this.timerText.text = this.timer.counterString;
        this.score += this.jewelManager.tempScore;
        this.scoreText.text = this.score.toString();
        if (this.timer.timeInSecond <= 0) {
            (_a = this.sounds.get("gameOverSound")) === null || _a === void 0 ? void 0 : _a.play();
            fetch(`https://backend-yduns.ondigitalocean.app/high-score?point=${this.score}`, { method: "POST" }).catch(() => alert("Fel, kunde inte lagra data!"));
            this.showGameOverScreen();
        }
    }
    draw(context) {
        super.draw(context);
        this.jewelManager.draw(context);
        this.scoreText.drawText(context, 70, 38, 50, 49);
        this.timerText.drawText(context, 70, 97, 50, 49);
    }
}
