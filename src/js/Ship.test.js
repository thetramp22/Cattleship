import Ship from "./Ship.js";

test("ships are created correctly", () => {
    const ship5 = new Ship(5);
    expect(ship5.length).toBe(5);
});

test("ships take damage correctly", () => {
    const ship3 = new Ship(3);
    ship3.hit();
    expect(ship3.hitsTaken).toBe(1);
});

test("ships sink correctly", () => {
    const ship3 = new Ship(3);
    ship3.hit();
    ship3.hit();
    ship3.hit();
    expect(ship3.isSunk()).toBe(true);
});
