"use strict";
class MoveEffect extends Effect {
    constructor(effectStatus, jewel, startPosition, endPosition, speed) {
        super(effectStatus);
        this.direction = new Vector(0, 0);
        this.jewel = jewel;
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        this.speed = speed;
        switch (effectStatus) {
            case EffectStatus.DecreasingEffect:
            case EffectStatus.EffectAtMax:
                jewel.position = endPosition;
                break;
            case EffectStatus.IncreasingEffect:
            case EffectStatus.EffectAtMin:
                jewel.position = startPosition;
                break;
        }
    }
    update() {
        switch (this.effectStatus) {
            case EffectStatus.DecreasingEffect:
                this.direction = new Vector(this.startPosition.x - this.jewel.x, this.startPosition.y - this.jewel.y);
                this.direction = new Vector(this.direction.x >= 1 ? 1 : -1, this.direction.y >= 1 ? 1 : -1);
                this.jewel.position = new Vector((this.jewel.position.x += this.direction.x * this.speed.x), (this.jewel.position.y += this.direction.y * this.speed.y));
                this.jewel.moving = true;
                if (this.jewel.x * this.direction.x >= this.startPosition.x * this.direction.x && this.jewel.y * this.direction.y >= this.startPosition.y * this.direction.y) {
                    this.jewel.position = this.startPosition;
                    this.effectStatus = EffectStatus.EffectAtMin;
                    this.jewel.moving = false;
                }
                break;
            case EffectStatus.IncreasingEffect:
                this.direction = new Vector(this.endPosition.x - this.jewel.x, this.endPosition.y - this.jewel.y);
                this.direction = new Vector(this.direction.x >= 1 ? 1 : -1, this.direction.y >= 1 ? 1 : -1);
                this.jewel.position = new Vector((this.jewel.position.x += this.direction.x * this.speed.x), (this.jewel.position.y += this.direction.y * this.speed.y));
                this.jewel.moving = true;
                if (this.jewel.x * this.direction.x >= this.endPosition.x * this.direction.x && this.jewel.y * this.direction.y >= this.endPosition.y * this.direction.y) {
                    this.jewel.position = this.endPosition;
                    this.effectStatus = EffectStatus.EffectAtMax;
                    this.jewel.moving = false;
                }
                break;
        }
    }
}
