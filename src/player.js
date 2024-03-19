import Gameboard from './gameboard';
import { noShipCollisions } from './shipPlacement';

function player() {
    const gameboard = Gameboard();
    function sendAttack(position, gameboardToAttack) {
        return gameboardToAttack.receiveAttack(position);
    }
    return { gameboard, sendAttack };
}

function cpuPlayer() {
    const gameboard = Gameboard();
    let hitLast = false;
    let lastPos = [];
    placeRandomShips(gameboard);

    let allPositions = [];
    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            allPositions.push([i, j]);
        }
    }

    function sendAttack(gameboardToAttack) {
        if (hitLast === true) {
            // If the last hit landed
            const x = lastPos[0];
            const y = lastPos[1];
            const possiblePositions = [
                [x + 1, y],
                [x - 1, y],
                [x, y + 1],
                [x, y - 1],
            ];
            let index = Math.floor(Math.random() * possiblePositions.length);
            let position = possiblePositions[index];
            while (!allPositions.some((pos) => pos[0] === position[0] && pos[1] === position[1])) {
                //  while position is not in allPositions
                possiblePositions.splice(index, 1);
                if (possiblePositions.length === 0) break; // prevent infinite loop when possiblePositions is empty
                index = Math.floor(Math.random() * possiblePositions.length);
                position = possiblePositions[index];
                console.log(position);
            }
            allPositions = allPositions.filter(
                // Removes that position from all positoins
                (pos) => pos[0] !== position[0] || pos[1] !== position[1],
            );
            const attack = gameboardToAttack.receiveAttack(position);
            if (attack) {
                lastPos = position;
            } else {
                hitLast = false;
            }
            return [attack, position];
        }
        const index = Math.floor(Math.random() * allPositions.length); // Random position
        const position = allPositions[index];
        allPositions = allPositions.filter((_, i) => i !== index);
        let attack = gameboardToAttack.receiveAttack(position);
        if (attack) {
            hitLast = true;
            lastPos = position;
        }
        return [attack, position];
    }
    return { gameboard, sendAttack };
}
function placeRandomShips(gameboard) {
    const availShips = [5, 4, 3, 3, 2];
    while (availShips.length > 0) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        const position = [x, y];
        if (noShipCollisions(position, availShips[0], gameboard)) {
            gameboard.placeShip(availShips[0], position);
            availShips.shift();
        }
    }
}
export { player, cpuPlayer };
