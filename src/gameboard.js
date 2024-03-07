import Ship from './ship';

function Gameboard() {
    const ships = [];
    function placeShip(length, position) {
        const newShip = Ship(length);
        ships.push([newShip, position]);
    }
    function receiveAttack(position) {
        let hit = false;
        ships.forEach(([ship, shipPosition]) => {
            if (JSON.stringify(shipPosition) === JSON.stringify(position)) {
                ship.hit();
                hit = ship.isSunk();
            }
        });
        return hit;
    }
    return { placeShip, ships, receiveAttack };
}
export default Gameboard;
