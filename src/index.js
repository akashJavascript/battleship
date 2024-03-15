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
    cellsEls.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-clicked') === 'true') return;
            e.target.setAttribute('data-clicked', true);
            const position = e.target.getAttribute('data-index').split(',').map(Number);
            const attack = player1.sendAttack(position, player2Board);
            if (attack) {
                displayController.markCellAsHit(position);
            } else {
                displayController.markCellAsMissed(position);
            }
        });
    });

    player1Board.placeShip(5, [0, 0]);
    player1Board.placeShip(4, [6, 0]);
    player1Board.placeShip(3, [1, 2]);
    player1Board.placeShip(3, [4, 5]);
    player1Board.placeShip(2, [4, 1]);
    player2Board.placeShip(5, [7, 2]);
    player2Board.placeShip(4, [1, 0]);
    player2Board.placeShip(3, [2, 5]);
    player2Board.placeShip(3, [3, 6]);
    player2Board.placeShip(2, [4, 5]);
    while (true) {
        const player1Attack = player1.sendAttack(
            [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
            player2Board,
        );
        const player2Attack = player2.sendAttack(player1Board);
        if (player1Attack) {
            // console.log('Player 1 hit');
        } else {
            // console.log('Player 1 missed');
        }
        if (player2Attack) {
            // console.log('Player 2 hit');
        } else {
            // console.log('Player 2 missed');
        }
        if (player1Board.allSunk(true) || player2Board.allSunk(true)) {
            console.log(player2Board.allSunk(true));

            break;
        }
    }
}
gameLoop();
