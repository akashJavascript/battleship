function DisplayController() {
    function createCellEls(board) {
        const currentCoords = [0, 0];
        for (let i = 0; i < 100; i += 1) {
            if (currentCoords[0] > 9) {
                currentCoords[0] = 0;
                currentCoords[1] += 1;
            }
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', currentCoords);
            cell.setAttribute('data-clicked', false);
            board.appendChild(cell);
            currentCoords[0] += 1;
        }
    }
    function markCellAsMissed(position, gameboard) {
        document
            .querySelector(`.${gameboard}-board > [data-index="${position}"]`)
            .classList.add('missed');
    }
    function markCellAsHit(position, gameboard) {
        document
            .querySelector(`.${gameboard}-board > [data-index="${position}"]`)
            .classList.add('hit');
    }
    function markShips(position, length, gameboard) {
        for (let i = 0; i < length; i += 1) {
            document
                .querySelector(
                    `.${gameboard}-board > [data-index="${[position[0] + i, position[1]]}"]`,
                )
                .classList.add('ship');
        }
    }
    function resetCells(gameboard1, gameboard2) {
        let cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.parentNode.removeChild(cell);
        });
        cells = document.querySelectorAll('.cell');
    }
    return { createCellEls, markCellAsHit, markCellAsMissed, markShips, resetCells };
}

export default DisplayController;
