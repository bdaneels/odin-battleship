import { domHandler } from "./dom";
import { GameBoard } from "./gameboard";
import Player from "./player";
import { Ship } from "./ship";


export function game() {
    let player1 = new Player('Human')
    let player2 = new Player('computer')
    domHandler.setPlayers(player1, player2)

    let playerBoard = new GameBoard()
    let computerBoard = new GameBoard()

    playerBoard.placeShip(new Ship('patrol', 2), 'vertical', 4, 8)
    playerBoard.placeShip(new Ship('destroyer', 3), 'vertical', 9, 0)
    playerBoard.placeShip(new Ship('destroyer', 3), 'vertical', 6, 5)
    playerBoard.placeShip(new Ship('submarine', 4), 'vertical', 4, 0)
    playerBoard.placeShip(new Ship('carrier', 5), 'vertical', 0, 0)
    
    computerBoard.placeShip(new Ship('patrol', 2), 'vertical', 4, 8)
    computerBoard.placeShip(new Ship('destroyer', 3), 'vertical', 9, 0)
    computerBoard.placeShip(new Ship('destroyer', 3), 'vertical', 6, 5)
    computerBoard.placeShip(new Ship('submarine', 4), 'vertical', 4, 0)
    computerBoard.placeShip(new Ship('carrier', 5), 'vertical', 0, 0)

    console.log(computerBoard.getshipPlacement())

    domHandler.generateBoards(playerBoard,computerBoard)
    player1.setTurn()
}
