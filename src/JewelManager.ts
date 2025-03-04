class JewelManager {
    private jewels: Jewel[][] = new Array();
    private tempScore: number = 0;
    private tempTime: number = 0;
    private movePossible: boolean = true;

    constructor(numberOfJewelsHorizontal: number, numberOfJewelsVertical: number) {
        for (let x: number = 0; x < numberOfJewelsHorizontal; x++) {
            for (let y: number = 0; y < numberOfJewelsVertical; y++) {}
        }
    }

    deselectJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => (jewel.selected = false)));
    }

    uncheckJewels() {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => (jewel.checked = false)));
    }
}
