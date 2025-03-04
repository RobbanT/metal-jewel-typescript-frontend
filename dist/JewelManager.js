"use strict";
class JewelManager {
    constructor(numberOfJewelsHorizontal, numberOfJewelsVertical) {
        this.jewels = new Array();
        this.tempScore = 0;
        this.tempTime = 0;
        this.movePossible = true;
        for (let x = 0; x < numberOfJewelsHorizontal; x++) {
            for (let y = 0; y < numberOfJewelsVertical; y++) { }
        }
    }
    deselectJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => (jewel.selected = false)));
    }
    uncheckJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => (jewel.checked = false)));
    }
}
