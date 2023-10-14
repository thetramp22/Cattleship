export default class Ship {
    constructor(length) {
        this.length = length;
        this.hitsTaken = 0;
        this.sunk = false;
    }

    hit() {
        this.hitsTaken += 1;
    }

    isSunk() {
        if (this.hitsTaken >= this.length) {
            this.sunk = true;
        }
        return this.sunk;
    }
}
