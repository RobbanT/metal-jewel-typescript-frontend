class Utility {
    static clampMin(num, minNum): number {
        return num < minNum ? minNum : num;
    }

    static clampMax(num, maxNum): number {
        return num > maxNum ? maxNum : num;
    }

    static clamp(num, minNum, maxNum): number {
        let clampNum: number;
        clampNum = Utility.clampMin(num, minNum);
        clampNum = Utility.clampMax(num, maxNum);
        return clampNum;
    }

    static setHighScore(point: number): void {
        fetch("https://backend-yduns.ondigitalocean.app/high-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ point: point }),
        }).catch(() => alert("Fel, kunde inte lagra data!"));
    }
}
