class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.left = min;
        this.right = max+1;
    }

    guess() {
        return Math.floor((this.left + this.right)/2) ;
    }

    lower() {
        this.right = Math.floor((this.left + this.right)/2) +1 ;
    }

    greater() {
        this.left = Math.floor((this.left + this.right)/2);
    }
}

module.exports = GuessingGame;
