import { player, cpuPlayer } from './player';

test('player returns an object with a gameboard property', () => {
    const newPlayer = player();
    expect(newPlayer.gameboard).toBeDefined();
});

test('players are allowed to send attacks', () => {
    const newPlayer = player();
    const opponent = player();
    opponent.gameboard.placeShip(3, [1, 2]);
    expect(newPlayer.sendAttack([1, 2], opponent.gameboard)).toBe(true);
});

test('players are allowed to send attacks and miss', () => {
    const newPlayer = player();
    const opponent = player();
    opponent.gameboard.placeShip(3, [1, 2]);
    expect(newPlayer.sendAttack([1, 3], opponent.gameboard)).toBe(false);
});

test('cpuPlayer should make random attacks', () => {
    const newPlayer = player();
    const cpu = cpuPlayer();
    const testArray = [];
    newPlayer.gameboard.placeShip(3, [1, 2]);
    for (let i = 0; i < 100; i += 1) {
        testArray.push(cpu.sendAttack(newPlayer.gameboard));
    }
    expect(testArray.includes(true)).toBe(true);
});
