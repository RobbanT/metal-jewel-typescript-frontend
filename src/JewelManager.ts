class JewelManager {
    private jewels: Jewel[][] | null[][];
    private numberOfJewelsHorizontal: number;
    private numberOfJewelsVertical: number;
    private _tempScore: number = 0;
    private _tempTime: number = 0;
    private _movePossible: boolean = false;
    private jewelManagerReady: boolean = false;
    private graphicsPath: string;

    constructor(graphicsPath: string, numberOfJewelsHorizontal: number, numberOfJewelsVertical: number) {
        this.numberOfJewelsHorizontal = numberOfJewelsHorizontal;
        this.numberOfJewelsVertical = numberOfJewelsVertical;
        this.graphicsPath = graphicsPath;
        this.jewels = new Array(numberOfJewelsHorizontal);
        for (let x = 0; x < numberOfJewelsHorizontal; x++) {
            this.jewels[x] = new Array(numberOfJewelsVertical);
        }
        this.initJewels();
        this.jewelManagerReady = true;
    }

    private initJewels() {
        if (!this.jewelManagerReady) {
            for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
                for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                    const color: Colors = Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)] as unknown as Colors;
                    this.jewels[x][y] = new Jewel(
                        `${this.graphicsPath}jewel-marked-square.png`,
                        new Rectangle(213 + 42 * x, 56 + 42 * y - 406, 800, 40),
                        `${this.graphicsPath}${color}-jewel-sprite-sheet.png`,
                        20,
                        false,
                        120,
                        true,
                        new Vector(213 + 42 * x, 56 + 42 * y - 406),
                        new Vector(213 + 42 * x, 56 + 42 * y),
                        new Vector(0, 10),
                        color
                    );
                    if (this.checkConnectedJewels(x, y, this.jewels[x][y]!.color) >= 4) {
                        y--;
                    }
                    this.uncheckJewels();
                }
            }
            this.moveAllJewelsForward();
        } else {
            for (let x = 0; x < this.numberOfJewelsHorizontal; x++) {
                for (let y = 0; y < this.numberOfJewelsVertical; y++) {
                    const color: Colors = Colors[Math.floor((Math.random() * Object.keys(Colors).length) / 2)] as unknown as Colors;
                    if (this.jewels[x][y] == null) {
                        this.jewels[x][y] = new Jewel(
                            `${this.graphicsPath}jewel-marked-square.png`,
                            new Rectangle(213 + 42 * x, 56 + 42 * y - 406, 800, 40),
                            `${this.graphicsPath}${color}-jewel-sprite-sheet.png`,
                            20,
                            false,
                            120,
                            true,
                            new Vector(213 + 42 * x, 56 + 42 * y - 406),
                            new Vector(213 + 42 * x, 56 + 42 * y),
                            new Vector(1, 1),
                            color
                        );
                    }
                }
            }
        }
    }

    get tempScore(): number {
        let copy = this._tempScore;
        this._tempScore = 0;
        return copy;
    }

    get tempTime(): number {
        let copy = this._tempTime;
        this._tempTime = 0;
        return copy;
    }
    fall() {
        for (let x: number = 0; x < this.jewels.length; x++) {
            let moveDistance = 0;
            for (let y: number = this.jewels[0].length - 1; y >= 0; y--) {
                if (this.jewels[x][y]!.remove) {
                    moveDistance++;
                } else if (moveDistance > 0) {
                    this.jewels[x][y]!.setNewMovePosition(EffectStatus.IncreasingEffect, this.jewels[x][y]!.position, new Vector(213 + 42 * x, 56 + 42 * (y + moveDistance)));
                    this.jewels[x][y + moveDistance] = this.jewels[x][y];
                }
            }
            for (let y: number = 0; y < moveDistance; y++) {
                this.jewels[x][y] = null;
            }
        }
    }

    checkConnectedJewels(x: number, y: number, jewelColor: Colors): number {
        let connectedJewels: number = 0;
        if (this.jewels[x][y] != null && !this.jewels[x][y].checked && !this.jewels[x][y].moving && !this.jewels[x][y].scaling && this.jewels[x][y].color === jewelColor) {
            connectedJewels++;
            this.jewels[x][y].checked = true;
            console.log("Börjar Kollar " + x + ":" + y);
            console.log(this.jewels[x][y].color);
            if (x < this.numberOfJewelsHorizontal - 1) {
                console.log("1Kollar " + (x + 1) + ":" + y);
                connectedJewels += this.checkConnectedJewels(x + 1, y, jewelColor);
            }

            if (x > 0) {
                console.log("2Kollar " + (x - 1) + ":" + y);
                connectedJewels += this.checkConnectedJewels(x - 1, y, jewelColor);
            }

            if (y < this.numberOfJewelsVertical - 1) {
                console.log("3Kollar " + x + ":" + (y + 1));
                connectedJewels += this.checkConnectedJewels(x, y + 1, jewelColor);
            }

            if (y > 0) {
                console.log("4Kollar " + x + ":" + (y - 1));
                connectedJewels += this.checkConnectedJewels(x, y - 1, jewelColor);
            }
        }
        return connectedJewels;
    }

    checkPossibleMoves(x: number, y: number, x2: number, y2: number) {
        if (!this.anyJewelMoving() && !this.anyJewelScaling() && !this._movePossible) {
            const firstSelectedJewel: Jewel | null = this.jewels[x][y];
            const secondSelectedJewel: Jewel | null = this.jewels[x2][y2];

            this.jewels[x][y] = secondSelectedJewel;
            this.jewels[x2][y2] = firstSelectedJewel;

            if (this.checkConnectedJewels(x, y, secondSelectedJewel!.color) >= 4 || this.checkConnectedJewels(x2, y2, firstSelectedJewel!.color) >= 4) this._movePossible = true;
            //this.uncheckJewels();

            this.jewels[x][y] = firstSelectedJewel;
            this.jewels[x2][y2] = secondSelectedJewel;
        } else {
            this._movePossible = true;
        }
    }

    swapJewels(jewelsIndex: Vector[]) {
        let firstSelectedJewel: Jewel | null = this.jewels[jewelsIndex[0].x][jewelsIndex[0].y];
        let secondSelectedJewel: Jewel | null = this.jewels[jewelsIndex[1].x][jewelsIndex[1].y];

        let deltaX = Math.abs(jewelsIndex[0].x - jewelsIndex[1].x);
        let deltaY = Math.abs(jewelsIndex[0].y - jewelsIndex[1].y);

        if ((deltaX === 0 && deltaY === 1) || (deltaX === 1 && deltaY === 0)) {
            this.jewels[jewelsIndex[0].x][jewelsIndex[0].y] = secondSelectedJewel;
            this.jewels[jewelsIndex[1].x][jewelsIndex[1].y] = firstSelectedJewel;

            if (
                this.checkConnectedJewels(jewelsIndex[0].x, jewelsIndex[0].y, secondSelectedJewel!.color) >= 4 ||
                this.checkConnectedJewels(jewelsIndex[1].x, jewelsIndex[1].y, firstSelectedJewel!.color) >= 4
            ) {
                this.jewels[jewelsIndex[0].x][jewelsIndex[0].y]!.setNewMovePosition(EffectStatus.IncreasingEffect, secondSelectedJewel!.position, firstSelectedJewel!.position);
                this.jewels[jewelsIndex[1].x][jewelsIndex[1].y]!.setNewMovePosition(EffectStatus.IncreasingEffect, firstSelectedJewel!.position, secondSelectedJewel!.position);
            } else {
                this.jewels[jewelsIndex[0].x][jewelsIndex[0].y] = firstSelectedJewel;
                this.jewels[jewelsIndex[1].x][jewelsIndex[1].y] = secondSelectedJewel;
            }
        }
        this.deselectJewels();
    }

    findSelectedJewelsIndex(): Vector[] {
        let selectedJewelsIndex: Vector[] = new Array();

        for (let x: number = 0; x < this.numberOfJewelsHorizontal; x++) {
            for (let y: number = 0; y < this.numberOfJewelsVertical; y++) {
                if (this.jewels[x][y]!.selected) {
                    selectedJewelsIndex.push(new Vector(x, y));
                }
            }
        }
        return selectedJewelsIndex;
    }

    deselectJewels() {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                if (!jewel === undefined) {
                    jewel.selected = false;
                }
            })
        );
    }

    uncheckJewels() {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                if (jewel != undefined && jewel != null) {
                    jewel.checked = false;
                }
            })
        );
    }

    prepareRemovalOfConnectedJewels() {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                if (!jewel === undefined && jewel.checked) {
                    jewel.scaleEffect.startDecreaseEffect();
                }
            })
        );
    }

    moveAllJewelsForward(): void {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                jewel.moveEffect.startIncreaseEffect();
            })
        );
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

    update(inputData: InputData) {
        this._tempTime = 0;
        this._tempScore = 0;
        this._movePossible = false;

        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                jewel.updateJewel(inputData);
            })
        );

        this.fall();
        this.initJewels();

        for (let x: number = 0; x < this.jewels.length; x++) {
            for (let y: number = 0; y < this.jewels[0].length; y++) {
                const connectedJewels = this.checkConnectedJewels(x, y, this.jewels[x][y]!.color);

                if (connectedJewels >= 4) {
                    this.prepareRemovalOfConnectedJewels();
                    this._tempScore += connectedJewels * 10 * connectedJewels;
                    this._tempTime += connectedJewels;
                }

                //this.uncheckJewels();

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

        if (this.findSelectedJewelsIndex().length >= 2) {
            this.swapJewels(this.findSelectedJewelsIndex());
        }
    }

    draw(context: CanvasRenderingContext2D | null) {
        this.jewels.forEach((jewels) =>
            jewels.forEach((jewel) => {
                jewel.draw(context);
            })
        );
    }
}
