export default class Gameboard {
    constructor() {
        this.grid = [];
    }

    createGrid() {
        const SIZE = 10;
        for (let i = 0; i < SIZE; i += 1) {
            const row = [];
            for (let j = 0; j < SIZE; j += 1) {
                row.push({ ship: false, hit: false });
            }
            this.grid.push(row);
        }
    }
}
