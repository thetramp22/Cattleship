import Gameboard from "./Gameboard";

test("blank gameboard is created", () => {
    const gameboard = new Gameboard();
    gameboard.createGrid();
    expect(gameboard.grid[0][0]).toStrictEqual({ ship: false, hit: false });
});
