class JewelManager {
    private jewels: Jewel[][] = new Array();
    private numberOfJewelsHorizontal: number;
    private numberOfJewelsVertical: number;
    private tempScore: number = 0;
    private tempTime: number = 0;
    private movePossible: boolean = true;

    constructor(numberOfJewelsHorizontal: number, numberOfJewelsVertical: number) {
        this.numberOfJewelsHorizontal = numberOfJewelsHorizontal;
        this.numberOfJewelsVertical = numberOfJewelsVertical;
        for (let x: number = 0; x < numberOfJewelsHorizontal; x++) {
            for (let y: number = 0; y < numberOfJewelsVertical; y++) {}
        }
    }

    findSelectedJewelsIndex(): Vector[] {
        let selectedJewelsIndex: Vector[] = new Array();

        for (let x: number = 0; x < this.numberOfJewelsHorizontal; x++) {
            for (let y: number = 0; y < this.numberOfJewelsVertical; y++) {
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
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                if (jewel.checked) {
                    jewel.scaleEffect.startDecreaseEffect();
                }
            })
        );
    }

    moveAllJewelsForward(): void {
        this.jewels.forEach((jewels) => jewels.forEach((jewel) => jewel.moveEffect.startIncreaseEffect()));
    }

    anyJewelMoving(): boolean {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                if (jewel.moving) {
                    return true;
                }
            })
        );
        return false;
    }

    anyJewelScaling(): boolean {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                if (jewel.scaling) {
                    return true;
                }
            })
        );
        return false;
    }
}
