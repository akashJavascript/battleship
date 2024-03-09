import Ship from './ship';

function Gameboard() {
    const ships = [];
    const missedAttacks = [];
    function placeShip(length, position) {
        const newShip = Ship(length);
        const positions = [];
        for (let i = 0; i < length; i += 1) {
            const newPosition = [position[0] + i, position[1]];
            positions.push(newPosition);
        }
        ships.push({ ship: newShip, positions });
    }
    function receiveAttack(position) {
        let hit = false;
        ships.forEach(({ ship, positions }) => {
            positions.forEach((shipPosition, index) => {
                if (JSON.stringify(shipPosition) === JSON.stringify(position)) {
                    ship.hit(index);
                    hit = true;
                }
            });
        });
        allSunk(hit);
        if (!hit) {
            missedAttacks.push(position);
        }
        return hit;
    }
    function allSunk(hit) {
        if (hit) {
            let sunk = true;
            ships.forEach(({ ship }) => {
                if (!ship.isSunk()) {
                    sunk = false;
                }
            });
            if (sunk) {
                return true;
            }
        }
    }
    return { placeShip, missedAttacks, receiveAttack };
}
export default Gameboard;
