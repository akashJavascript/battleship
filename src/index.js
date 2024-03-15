import './style.css';
import { player, cpuPlayer } from './player';
import Ship from './ship';
import Gameboard from './gameboard';
import DisplayController from './displayController';

const player1BoardEl = document.querySelector('.player1-board');
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

    let currentPlayer = player1;
    let currentBoard = player2Board;
    cellsEls.forEach((cell) => {
        cell.addEventListener('click', (e) => {
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
                    }
                } else {
                    displayController.markCellAsMissed(cpuAttackPosition, 'player1');
                }
                currentPlayer = player1;
                currentBoard = player2Board;
            }
        });
    });

    player1Board.placeShip(5, [0, 0]);
    player1Board.placeShip(4, [6, 0]);
    player1Board.placeShip(3, [1, 2]);
    player1Board.placeShip(3, [4, 5]);
    player1Board.placeShip(2, [4, 1]);
    player2Board.placeShip(5, [5, 2]);
    player2Board.placeShip(4, [1, 0]);
    player2Board.placeShip(3, [2, 5]);
    player2Board.placeShip(3, [3, 6]);
    player2Board.placeShip(2, [6, 5]);
}
gameLoop();
