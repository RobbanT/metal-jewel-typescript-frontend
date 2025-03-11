"use strict";
var EffectStatus;
(function (EffectStatus) {
    EffectStatus[EffectStatus["DecreasingEffect"] = 0] = "DecreasingEffect";
    EffectStatus[EffectStatus["IncreasingEffect"] = 1] = "IncreasingEffect";
    EffectStatus[EffectStatus["EffectAtMin"] = 2] = "EffectAtMin";
    EffectStatus[EffectStatus["EffectAtMax"] = 3] = "EffectAtMax";
})(EffectStatus || (EffectStatus = {}));
class Effect {
    constructor(effectStatus) {
        this.effectStatus = effectStatus;
    }
    startDecreaseEffect() {
        this.effectStatus = EffectStatus.DecreasingEffect;
    }
    startIncreaseEffect() {
        this.effectStatus = EffectStatus.IncreasingEffect;
    }
}
