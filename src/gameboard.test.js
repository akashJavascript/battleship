import Gameboard from './gameboard';

let gameboard = new Gameboard();
test('Gameboard should have 5 ships', () => {
    gameboard.placeShip(3, [5, 0]);
    gameboard.placeShip(4, [4, 1]);
    gameboard.placeShip(2, [3, 2]);
    gameboard.placeShip(2, [3, 3]);
    gameboard.placeShip(2, [2, 4]);
    // expect(gameboard.ships.length).toBe(5);
});

test('Able to place hits on ships', () => {
    gameboard = new Gameboard();
    gameboard.placeShip(1, [5, 0]);
    gameboard.receiveAttack([5, 0]);
    expect(gameboard.receiveAttack([5, 0])).toBe(true);
});
test('Able to hit bigger ships', () => {
    gameboard = new Gameboard();
    gameboard.placeShip(3, [5, 0]);
    gameboard.receiveAttack([5, 0]);
    gameboard.receiveAttack([5, 1]);
    gameboard.receiveAttack([5, 2]);
    expect(gameboard.receiveAttack([5, 0])).toBe(true);
});

test('Able to hit any position on the ship', () => {
    gameboard = new Gameboard();
    gameboard.placeShip(3, [5, 0]);
    expect(gameboard.receiveAttack([6, 0])).toBe(true);
});
test('Able to miss a ship', () => {
    gameboard = new Gameboard();
    gameboard.placeShip(3, [5, 0]);
    expect(gameboard.receiveAttack([4, 0])).toBe(false);
});

test('Gameboard needs to keep track of missed attacks', () => {
    gameboard = new Gameboard();
    gameboard.placeShip(3, [5, 0]);
    gameboard.receiveAttack([4, 0]);
    expect(gameboard.missedAttacks.length).toBe(1);
});

