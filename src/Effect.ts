enum EffectStatus {
    DecreasingEffect,
    IncreasingEffect,
    EffectAtMin,
    EffectAtMax,
}

abstract class Effect {
    protected effectStatus: EffectStatus;

    constructor(effectStatus: EffectStatus) {
        this.effectStatus = effectStatus;
    }

    startDecreaseEffect() {
        this.effectStatus = EffectStatus.DecreasingEffect;
    }

    startIncreaseEffect() {
        this.effectStatus = EffectStatus.IncreasingEffect;
    }
}
