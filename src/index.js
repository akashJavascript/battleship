// TODOS
import './style.css';
import { player, cpuPlayer } from './player';
import Ship from './ship';
import Gameboard from './gameboard';
import DisplayController from './displayController';
import shipPlacement, { resetAvailShips } from './shipPlacement';

const player1BoardEl = document.querySelector('.player1-board');
const infoEl = document.querySelector('.info');
const player2BoardEl = document.querySelector('.player2-board');
function gameLoop() {
    const displayController = DisplayController();
    const player1 = player();
    const player2 = cpuPlayer();
    const player1Board = player1.gameboard;
    const player2Board = player2.gameboard;
    displayController.createCellEls(player1BoardEl);
    displayController.createCellEls(player2BoardEl);
    const cellsEls = document.querySelectorAll('.player2-board > .cell');
    const placeShipEls = document.querySelectorAll('.player1-board > .cell');
    let currentPlayer = player1;
    let currentBoard = player2Board;
    placeShipEls.forEach((cell) => {
        function placeShipHandler(e) {
            const position = e.target.getAttribute('data-index').split(',').map(Number);
            const shipPlaced = shipPlacement(position, player1Board);
            if (!shipPlaced) {
                infoEl.textContent = 'Attack!';
                // If all ships have been placed, remove the event listener
                cell.removeEventListener('click', placeShipHandler);
                // remove the ship class for all ships
                const ships = document.querySelectorAll('.player1-board > .ship');
                ships.forEach((ship) => {
                    ship.classList.remove('ship');
                });
                // addd the game loop handler to all cells
                cellsEls.forEach((cell) => {
                    cell.addEventListener('click', gameLoopHandler);
                });
            }
        }
        cell.addEventListener('click', placeShipHandler);
        function gameLoopHandler(e) {
            if (e.target.getAttribute('data-clicked') === 'true') return;
            e.target.setAttribute('data-clicked', true);
            const position = e.target.getAttribute('data-index').split(',').map(Number);
            const attack = player1.sendAttack(position, player2Board);
            if (attack) {
                displayController.markCellAsHit(position, 'player2');
                if (player2Board.allSunk(true)) {
                    infoEl.textContent = 'Player 1 wins!';
                    resetGame(
                        player1BoardEl,
                        player2BoardEl,
                        displayController,
                        player1Board,
                        player2Board,
                    );
                }
            } else {
                displayController.markCellAsMissed(position, 'player2');
            }
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            currentBoard = currentBoard === player2Board ? player1Board : player2Board;
            if (currentPlayer === player2) {
                const cpuAttack = player2.sendAttack(player1Board);
                const attackHit = cpuAttack[0];
                const cpuAttackPosition = cpuAttack[1];
                if (attackHit) {
                    displayController.markCellAsHit(cpuAttackPosition, 'player1');
                    if (player1Board.allSunk(true)) {
                        infoEl.textContent = 'CPU wins!';
                        resetGame(
                            player1BoardEl,
                            player2BoardEl,
                            displayController,
                            player1Board,
                            player2Board,
                        );
                    }
                } else {
                    displayController.markCellAsMissed(cpuAttackPosition, 'player1');
                }
                currentPlayer = player1;
                currentBoard = player2Board;
            }
        }
    });
}
function resetGame(gameboard1El, gameboard2El, displayController, gameboard1, gameboard2) {
    displayController.resetCells(gameboard1El, gameboard2El);
    gameboard1.clearShips();
    gameboard2.clearShips();
    resetAvailShips();
    gameLoop();
}
gameLoop();
