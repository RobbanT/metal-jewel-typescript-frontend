"use strict";
class ScaleEffect extends Effect {
    constructor(effectStatus, jewel, scalePerUpdate, minScale = 0.4, maxScale = 1) {
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
    update() {
        switch (this.effectStatus) {
            case EffectStatus.DecreasingEffect:
                if (this.jewel.scale > this.minScale) {
                    this.jewel.scale -= this.scalePerUpdate;
                    this.jewel.position = new Vector(this.jewel.position.x + (40 / 2) * this.scalePerUpdate, this.jewel.position.y + (40 / 2) * this.scalePerUpdate);
                    this.jewel.scaling = true;
                    this.jewel.selected = false;
                    this.jewel.restartAnimation();
                    this.jewel.pausAnimation();
                }
                else {
                    this.effectStatus = EffectStatus.EffectAtMin;
                    this.jewel.remove = true;
                }
                break;
            case EffectStatus.IncreasingEffect:
                if (this.jewel.scale < this.maxScale) {
                    this.jewel.scale += this.scalePerUpdate;
                }
                else {
                    this.effectStatus = EffectStatus.EffectAtMax;
                }
                break;
            case EffectStatus.EffectAtMin:
            case EffectStatus.EffectAtMax:
                this.jewel.scaling = false;
                break;
        }
    }
}
