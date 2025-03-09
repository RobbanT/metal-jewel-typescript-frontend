"use strict";
class JewelManager {
    constructor(numberOfJewelsHorizontal, numberOfJewelsVertical, graphicsPath, sounds) {
        this._movePossible = false;
        this._tempScore = 0;
        this._tempTime = 0;
        this.jewelManagerReady = false;
        this.numberOfJewelsHorizontal = numberOfJewelsHorizontal;
        this.numberOfJewelsVertical = numberOfJewelsVertical;
        this.graphicsPath = graphicsPath;
        this.sounds = sounds;
        this.jewels = new Array(numberOfJewelsHorizontal);
        for (let x = 0; x < numberOfJewelsHorizontal; x++) {
            this.jewels[x] = new Array(numberOfJewelsVertical);
        }
        this.initJewels();
    }
    initJewels() {
        var _a, _b;
        if (!this.jewelManagerReady) {
            (_a = this.sounds.get("newJewelsSound")) === null || _a === void 0 ? void 0 : _a.play();
            for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
                for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                    const color = Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)];
                    this.jewels[x][y] = new Jewel(`${this.graphicsPath}jewel-marked-square.png`, new Rectangle(214 + 42 * x, 56 + 42 * y - 406, 800, 40), `${this.graphicsPath}${color}-jewel-sprite-sheet.png`, 20, false, 120, true, new Vector(214 + 42 * x, 56 + 42 * y - 406), new Vector(214 + 42 * x, 56 + 42 * y), new Vector(0, 7.5 + (this.numberOfJewelsHorizontal - x) * 0.5), color);
                    if (this.checkConnectedJewels(x, y, this.jewels[x][y].color) >= 4) {
                        y--;
                    }
                    this.uncheckJewels();
                }
            }
            setTimeout(() => {
                this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
                    jewel.moveEffect.startIncreaseEffect();
                }));
                this.jewelManagerReady = true;
            }, 300);
        }
        else {
            for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
                for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                    if (this.jewels[x][y] === null) {
                        console.log("NY");
                        const color = Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)];
                        this.jewels[x][y] = new Jewel(`${this.graphicsPath}jewel-marked-square.png`, new Rectangle(214 + 42 * x, 56 + 42 * y - 406, 800, 40), `${this.graphicsPath}${color}-jewel-sprite-sheet.png`, 20, false, 120, true, new Vector(214 + 42 * x, 56 + 42 * y - 406), new Vector(214 + 42 * x, 56 + 42 * y), new Vector(0, 5 + (this.numberOfJewelsHorizontal - x) * 0.5), color);
                        (_b = this.jewels[x][y]) === null || _b === void 0 ? void 0 : _b.moveEffect.startIncreaseEffect();
                    }
                }
            }
        }
    }
    update(inputData) {
        this._movePossible = false;
        if (!this.anyJewelMoving() && !this.anyJewelScaling())
            this.fall();
        if (!this.anyJewelMoving())
            this.initJewels();
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel != null) {
                jewel.updateJewel(inputData);
            }
        }));
        for (let x = 0; x < this.jewels.length; x++) {
            for (let y = 0; y < this.jewels[0].length; y++) {
                if (this.jewels[x][y] != null) {
                    if (!this.anyJewelMoving() && !this.anyJewelScaling()) {
                        const connectedJewels = this.checkConnectedJewels(x, y, this.jewels[x][y].color);
                        if (connectedJewels >= 4) {
                            this.prepareRemovalOfConnectedJewels();
                            this._tempScore += connectedJewels;
                            this._tempTime += connectedJewels;
                        }
                    }
                    this.uncheckJewels();
                    if (x < this.jewels.length - 1) {
                        this.checkPossibleMoves(x, y, x + 1, y);
                    }
                    if (x > 0) {
                        this.checkPossibleMoves(x, y, x - 1, y);
                    }
                    if (y < this.jewels.length[1] - 1) {
                        this.checkPossibleMoves(x, y, x, y + 1);
                    }
                    if (y > 0) {
                        this.checkPossibleMoves(x, y, x, y - 1);
                    }
                }
            }
        }
        if (this.findSelectedJewelsIndex().length >= 2) {
            this.swapJewels(this.findSelectedJewelsIndex());
        }
    }
    checkPossibleMoves(x, y, x2, y2) {
        if (!this.anyJewelMoving() && !this.anyJewelScaling() && !this._movePossible) {
            const firstSelectedJewel = this.jewels[x][y];
            const secondSelectedJewel = this.jewels[x2][y2];
            this.jewels[x][y] = secondSelectedJewel;
            this.jewels[x2][y2] = firstSelectedJewel;
            if (this.checkConnectedJewels(x, y, secondSelectedJewel.color) >= 4 || this.checkConnectedJewels(x2, y2, firstSelectedJewel.color) >= 4) {
                this._movePossible = true;
            }
            this.uncheckJewels();
            this.jewels[x][y] = firstSelectedJewel;
            this.jewels[x2][y2] = secondSelectedJewel;
        }
        else {
            this._movePossible = true;
        }
    }
    checkConnectedJewels(x, y, jewelColor) {
        let connectedJewels = 0;
        if (this.jewels[x][y] != null && !this.jewels[x][y].checked && !this.jewels[x][y].moving && !this.jewels[x][y].scaling && this.jewels[x][y].color === jewelColor) {
            connectedJewels++;
            this.jewels[x][y].checked = true;
            if (x < this.numberOfJewelsHorizontal - 1) {
                connectedJewels += this.checkConnectedJewels(x + 1, y, jewelColor);
            }
            if (x > 0) {
                connectedJewels += this.checkConnectedJewels(x - 1, y, jewelColor);
            }
            if (y < this.numberOfJewelsVertical - 1) {
                connectedJewels += this.checkConnectedJewels(x, y + 1, jewelColor);
            }
            if (y > 0) {
                connectedJewels += this.checkConnectedJewels(x, y - 1, jewelColor);
            }
        }
        return connectedJewels;
    }
    fall() {
        for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
            let moveDistance = 0;
            for (let y = this.numberOfJewelsVertical - 1; y >= 0; y--) {
                if (this.jewels[x][y] != null && this.jewels[x][y].remove) {
                    moveDistance++;
                }
                else if (this.jewels[x][y] != null && moveDistance > 0) {
                    this.jewels[x][y].setNewMovePosition(EffectStatus.IncreasingEffect, new Vector(214 + 42 * x, 56 + 42 * (y + moveDistance)), new Vector(0, 5));
                    this.jewels[x][y + moveDistance] = this.jewels[x][y];
                }
            }
            for (let y = 0; y < moveDistance; y++) {
                this.jewels[x][y] = null;
            }
        }
    }
    swapJewels(jewelsIndex) {
        var _a;
        const firstSelectedJewel = this.jewels[jewelsIndex[0].x][jewelsIndex[0].y];
        const secondSelectedJewel = this.jewels[jewelsIndex[1].x][jewelsIndex[1].y];
        const deltaX = Math.abs(jewelsIndex[0].x - jewelsIndex[1].x);
        const deltaY = Math.abs(jewelsIndex[0].y - jewelsIndex[1].y);
        if ((deltaX === 0 && deltaY === 1) || (deltaX === 1 && deltaY === 0)) {
            this.jewels[jewelsIndex[0].x][jewelsIndex[0].y] = secondSelectedJewel;
            this.jewels[jewelsIndex[1].x][jewelsIndex[1].y] = firstSelectedJewel;
            if (this.checkConnectedJewels(jewelsIndex[0].x, jewelsIndex[0].y, secondSelectedJewel.color) >= 4 ||
                this.checkConnectedJewels(jewelsIndex[1].x, jewelsIndex[1].y, firstSelectedJewel.color) >= 4) {
                (_a = this.sounds.get("switchSound")) === null || _a === void 0 ? void 0 : _a.play();
                this.jewels[jewelsIndex[0].x][jewelsIndex[0].y].setNewMovePosition(EffectStatus.IncreasingEffect, firstSelectedJewel.position, new Vector(deltaX * 3, deltaY * 3));
                this.jewels[jewelsIndex[1].x][jewelsIndex[1].y].setNewMovePosition(EffectStatus.IncreasingEffect, secondSelectedJewel.position, new Vector(deltaX * 3, deltaY * 3));
            }
            else {
                this.jewels[jewelsIndex[0].x][jewelsIndex[0].y] = firstSelectedJewel;
                this.jewels[jewelsIndex[1].x][jewelsIndex[1].y] = secondSelectedJewel;
            }
        }
        this.deselectJewels();
    }
    get movePossible() {
        return this._movePossible;
    }
    get tempScore() {
        const copy = this._tempScore;
        this._tempScore = 0;
        return copy;
    }
    get tempTime() {
        const copy = this._tempTime;
        this._tempTime = 0;
        return copy;
    }
    findSelectedJewelsIndex() {
        const selectedJewelsIndex = new Array();
        for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
            for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                if (this.jewels[x][y] != null && this.jewels[x][y].selected) {
                    selectedJewelsIndex.push(new Vector(x, y));
                }
            }
        }
        return selectedJewelsIndex;
    }
    deselectJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel != null) {
                jewel.selected = false;
            }
        }));
    }
    uncheckJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel != null) {
                jewel.checked = false;
            }
        }));
    }
    prepareRemovalOfConnectedJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            var _a;
            if (jewel != null && !this.anyJewelMoving() && jewel.checked) {
                (_a = this.sounds.get("clusterSound")) === null || _a === void 0 ? void 0 : _a.play();
                jewel.scaleEffect.startDecreaseEffect();
            }
        }));
    }
    anyJewelMoving() {
        for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
            for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                if (this.jewels[x][y] != null && this.jewels[x][y].moving) {
                    return true;
                }
            }
        }
        return false;
    }
    anyJewelScaling() {
        for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
            for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                if (this.jewels[x][y] != null && this.jewels[x][y].scaling) {
                    return true;
                }
            }
        }
        return false;
    }
    draw(context) {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel != null) {
                jewel.draw(context);
            }
        }));
    }
}
