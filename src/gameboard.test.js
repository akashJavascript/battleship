import Gameboard from './gameboard';

const gameboard = new Gameboard();
test('Gameboard should have 5 ships', () => {
    gameboard.placeShip(3, [5, 0]);
    gameboard.placeShip(4, [4, 1]);
    gameboard.placeShip(2, [3, 2]);
    gameboard.placeShip(2, [3, 3]);
    gameboard.placeShip(2, [2, 4]);
    expect(gameboard.ships.length).toBe(5);
});
