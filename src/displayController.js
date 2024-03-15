function DisplayController() {
    function createCellEls(board) {
        let currentCoords = [0, 0];
        for (let i = 0; i < 100; i += 1) {
            if (currentCoords[0] > 9) {
                currentCoords[0] = 0;
                currentCoords[1] += 1;
            }
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', currentCoords);
            cell.setAttribute('data-clicked', false)
            board.appendChild(cell);
            currentCoords[0] += 1;
        }
    }
    function markCellAsMissed(position) {
        document
            .querySelector(`.player2-board > [data-index="${position}"]`)
            .classList.add('missed');
        console.log('a');
    }
    function markCellAsHit(position) {
        document.querySelector(`.player2-board > [data-index="${position}"]`).classList.add('hit');
        console.log('b');
    }
    return { createCellEls, markCellAsHit, markCellAsMissed };
}

export default DisplayController;
