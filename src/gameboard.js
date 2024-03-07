import ship from './ship';

function Gameboard() {
    const ships = [];
    function placeShip(length, position) {
        const newShip = ship(length);
        ships.push([newShip, position]);
    }
    return { placeShip, ships };
}
export default Gameboard;
