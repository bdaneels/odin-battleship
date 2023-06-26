import { botAI } from "./ai";
import { domHandler } from "./dom";
import { GameBoard } from "./gameboard";
import Player from "./player";
import { Ship } from "./ship";

export function game() {
  let player1 = new Player("human");
  let player2 = new Player("computer");
  domHandler.setPlayers(player1, player2);

  let playerBoard = new GameBoard(player1);
  let computerBoard = new GameBoard(player2);
  domHandler.generateBoards(playerBoard, computerBoard);
  domHandler.displayConsole("place your ships");
  domHandler.addEventListenerBTNS();
  domHandler.playerPlacement(playerBoard);

  computerBoard.placeShip(new Ship("patrol", 2), "vertical", 4, 8);
  computerBoard.placeShip(new Ship("destroyer", 3), "vertical", 5, 9);
  computerBoard.placeShip(new Ship("destroyer", 3), "vertical", 6, 5);
  computerBoard.placeShip(new Ship("submarine", 4), "vertical", 4, 7);
  computerBoard.placeShip(new Ship("carrier", 5), "horizontal", 0, 0);

  console.log(computerBoard.getshipPlacement());

  botAI.setBoard(playerBoard, player1, player2);
  player1.setTurn();
}
