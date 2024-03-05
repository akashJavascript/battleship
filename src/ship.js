function Ship(length) {
    let hitCount = 0;
    let hits = Array(length).fill(false);

    function isSunk() {
        return hitCount === length;
    }

    return { length, hitCount, isSunk: isSunk() };
}

export default Ship;
