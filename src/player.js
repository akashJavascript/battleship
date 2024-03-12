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
    function sendAttack(gameboardToAttack) {
        const position = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
        return gameboardToAttack.receiveAttack(position);
    }
    return { gameboard, sendAttack };
}
export { player, cpuPlayer };
