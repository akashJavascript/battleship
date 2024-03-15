function Ship(length) {
    let hitCount = 0;
    function isSunk() {
        return hitCount >= length;
    }
    function hit() {
        hitCount += 1;
    }
    function getHitCount() {
        return hitCount;
    }
    return { length, isSunk, hit, getHitCount };
}

export default Ship;
