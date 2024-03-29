import DisplayController from './displayController';

const infoEl = document.querySelector('.info');
let displayController = DisplayController();
let availShips = [5, 4, 3, 3, 2];
function shipPlacement(position, gameboard) {
    if (availShips.length === 0) return undefined;
    if (noShipCollisions(position, availShips[0], gameboard)) {
        gameboard.placeShip(availShips[0], position);
        displayController.markShips(position, availShips[0], 'player1');
        availShips.shift();
        if (availShips.length > 0) {
            infoEl.textContent = `Place your ${availShips[0]}-length ship`;
        }
    }
    return availShips.length > 0;
}
function noShipCollisions(position, length, gameboard) {
    // check if the ship is going to be placed outside the board
    if (position[0] + length > 10) {
        infoEl.textContent = 'Outside the board';
        return false;
    }
    // check if the ship is going to be placed on top of another ship
    let shipCollision = false;
    gameboard.ships.forEach((ship) => {
        ship.positions.forEach((shipPosition) => {
            for (let i = 0; i < length; i += 1) {
                if (
                    JSON.stringify(shipPosition) === JSON.stringify([position[0] + i, position[1]])
                ) {
                    if (shipCollision !== true) {
                        // Makes it so you only get one alert
                        infoEl.textContent = 'Ship collision';
                    }
                    shipCollision = true;
                }
            }
        });
    });
    if (shipCollision === true) return false;
    return true;
}
export function resetAvailShips() {
    availShips = [5, 4, 3, 3, 2];
}
export default shipPlacement;
export { noShipCollisions };
