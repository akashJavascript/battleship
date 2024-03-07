function Ship(length) {
    let hitCount = 0;

    function isSunk() {
        return hitCount === length;
    }
    function hit() {
        hitCount += 1;
    }
    return { length, hitCount, isSunk, hit };
}

export default Ship;
