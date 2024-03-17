// TODOS
//* 1. let the player place ships at the start
// 2. Restart game on game end
// 3. Make a "smart" cpu

import './style.css';
import { player, cpuPlayer } from './player';
import Ship from './ship';
import Gameboard from './gameboard';
import DisplayController from './displayController';
import shipPlacement, {resetAvailShips} from './shipPlacement';

const player1BoardEl = document.querySelector('.player1-board');
const player2BoardEl = document.querySelector('.player2-board');
function gameLoop() {
    const displayController = DisplayController();
    const player1 = player();
    console.log(player1);
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
            console.log('b');
            const position = e.target.getAttribute('data-index').split(',').map(Number);
            const shipPlaced = shipPlacement(position, player1Board);
            console.log(position,shipPlaced);
            if (!shipPlaced) {
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
            console.log('a');
            if (e.target.getAttribute('data-clicked') === 'true') return;
            e.target.setAttribute('data-clicked', true);
            const position = e.target.getAttribute('data-index').split(',').map(Number);
            const attack = player1.sendAttack(position, player2Board);
            if (attack) {
                displayController.markCellAsHit(position, 'player2');
                if (player2Board.allSunk(true)) {
                    alert('Player 1 wins!');
                }
            } else {
                console.log(position);
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
                        alert('Player 2 wins!');
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

    // player1Board.placeShip(5, [0, 0]);
    // player1Board.placeShip(4, [6, 0]);
    // player1Board.placeShip(3, [1, 2]);
    // player1Board.placeShip(3, [4, 5]);
    // player1Board.placeShip(2, [4, 1]);
    // player2Board.placeShip(5, [5, 2]);
    // player2Board.placeShip(4, [1, 0]);
    // player2Board.placeShip(3, [2, 5]);
    // player2Board.placeShip(3, [3, 6]);
    // player2Board.placeShip(2, [6, 5]);
}
function resetGame(gameboard1El, gameboard2El, displayController, gameboard1, gameboard2) {
    console.log(gameboard1El, gameboard2El);
    displayController.resetCells(gameboard1El, gameboard2El);
    gameboard1.clearShips();
    gameboard2.clearShips();
    resetAvailShips();
    gameLoop();
}
gameLoop();
