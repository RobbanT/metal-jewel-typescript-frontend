class ScaleEffect extends Effect {
    private jewel: Jewel;
    private scalePerUpdate: number;
    private minScale: number;
    private maxScale: number;

    constructor(effectStatus: EffectStatus, jewel: Jewel, scalePerUpdate: number, minScale: number = 0.25, maxScale: number = 1) {
        super(effectStatus);
        this.jewel = jewel;
        this.minScale = minScale;
        this.maxScale = maxScale;
        this.scalePerUpdate = scalePerUpdate;

        switch (effectStatus) {
            case EffectStatus.DecreasingEffect:
            case EffectStatus.EffectAtMax:
                jewel.scale = maxScale;
                break;
            case EffectStatus.IncreasingEffect:
            case EffectStatus.EffectAtMin:
                jewel.scale = minScale;
                break;
        }
    }

    update(): void {
        switch (this.effectStatus) {
            case EffectStatus.DecreasingEffect:
                if (this.jewel.scale > this.minScale) {
                    this.jewel.scale -= this.scalePerUpdate;
                    this.jewel.position = new Vector(this.jewel.position.x + (40 / 2) * this.scalePerUpdate, this.jewel.position.y + (40 / 2) * this.scalePerUpdate);
                    this.jewel.scaling = true;
                    this.jewel.selected = false;
                    this.jewel.restartAnimation();
                    this.jewel.pausAnimation();
                } else {
                    this.effectStatus = EffectStatus.EffectAtMin;
                    this.jewel.remove = true;
                }
                break;
            case EffectStatus.IncreasingEffect:
                if (this.jewel.scale < this.maxScale) {
                    this.jewel.scale += this.scalePerUpdate;
                } else {
                    this.effectStatus = EffectStatus.EffectAtMax;
                }
                break;
        }
    }
}
