"use strict";
class Utility {
    static clampMin(num, minNum) {
        return num < minNum ? minNum : num;
    }
    static clampMax(num, maxNum) {
        return num > maxNum ? maxNum : num;
    }
    static clamp(num, minNum, maxNum) {
        let clampNum;
        clampNum = Utility.clampMin(num, minNum);
        clampNum = Utility.clampMax(num, maxNum);
        return clampNum;
    }
    static getHighScores() {
        let highScores = new Array();
        fetch("https://backend-yduns.ondigitalocean.app/high-scores")
            .then((res) => res.json())
            .then((data) => (highScores = data.highScores))
            .catch(() => alert("Fel, kunde inte hämta data!"));
        return highScores;
    }
    static setHighScore(point) {
        fetch("https://backend-yduns.ondigitalocean.app/high-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ point: point }),
        }).catch(() => alert("Fel, kunde inte lagra data!"));
    }
}
