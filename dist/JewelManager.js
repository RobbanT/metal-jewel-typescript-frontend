"use strict";
class JewelManager {
    constructor(numberOfJewelsHorizontal, numberOfJewelsVertical) {
        this.jewels = new Array();
        this.tempScore = 0;
        this.tempTime = 0;
        this.movePossible = true;
        this.numberOfJewelsHorizontal = numberOfJewelsHorizontal;
        this.numberOfJewelsVertical = numberOfJewelsVertical;
        for (let x = 0; x < numberOfJewelsHorizontal; x++) {
            for (let y = 0; y < numberOfJewelsVertical; y++) { }
        }
    }
    findSelectedJewelsIndex() {
        let selectedJewelsIndex = new Array();
        for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
            for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                if (this.jewels[x][y].selected) {
                    selectedJewelsIndex.push(new Vector(x, y));
                }
            }
        }
        return selectedJewelsIndex;
    }
    deselectJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => (jewel.selected = false)));
    }
    uncheckJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => (jewel.checked = false)));
    }
    prepareRemovalOfConnectedJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel.checked) {
                jewel.scaleEffect.startDecreaseEffect();
            }
        }));
    }
    moveAllJewelsForward() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => jewel.moveEffect.startIncreaseEffect()));
    }
    anyJewelMoving() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel.moving) {
                return true;
            }
        }));
        return false;
    }
    anyJewelScaling() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => {
            if (jewel.scaling) {
                return true;
            }
        }));
        return false;
    }
}
