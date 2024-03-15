import Gameboard from './gameboard';

function player() {
    const gameboard = Gameboard();
    function sendAttack(position, gameboardToAttack) {
        return gameboardToAttack.receiveAttack(position);
    }
    return { gameboard, sendAttack };
}

function cpuPlayer() {
    const gameboard = Gameboard();
    let allPositions = [];
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            allPositions.push([i, j]);
        }
    }

    function sendAttack(gameboardToAttack) {
        const index = Math.floor(Math.random() * allPositions.length);
        const position = allPositions[index];

        allPositions = allPositions.filter((_, i) => i !== index);

        return [gameboardToAttack.receiveAttack(position), position];
    }
    return { gameboard, sendAttack };
}

export { player, cpuPlayer };
