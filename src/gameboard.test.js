import { GameBoard } from "./gameboard.js";
import { Ship } from "./ship.js";

beforeAll(() => {});

test("register ship placement", () => {
  const ship = new Ship("patrol", 3);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);

  expect(board.getshipPlacement()).toEqual([
    {
      coordinates: [4, 8],
      direction: "vertical",
      ship: { hits: 0, length: 3, name: "patrol", sunk: false },
    },
  ]);
});

test("board array should contain 100 elements", () => {
  let board = new GameBoard();

  expect(board.constructBoard().length).toBe(100);
});

test("register ship hit", () => {
  const ship = new Ship("patrol", 3);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);
  board.receiveAttack(null, 4, 8);

  expect(ship.hits).toBe(1);
});

test("register ship mis", () => {
  const ship = new Ship("patrol", 3);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);
  board.receiveAttack(null, 5, 8);
  board.receiveAttack(null, 6, 9);

  expect(board.misses).toStrictEqual([
    [5, 8],
    [6, 9],
  ]);
});

test("check for alive ships", () => {
  const ship = new Ship("patrol", 3);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);

  expect(board.checkForSunk()).toBeFalsy();
});

test("report all ships sunk", () => {
  const ship = new Ship("patrol", 1);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);
  board.receiveAttack(null, 4, 8);
  board.checkForSunk();

  expect(board.allShipsSunk).toBeTruthy();
});

test("check for one alive, one sunk", () => {
  const ship = new Ship("patrol", 1);
  const ship2 = new Ship("destroyer", 1);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);
  board.placeShip(ship2, "horizontal", 0, 0);
  board.receiveAttack(null, 4, 8);
  board.checkForSunk();

  expect(board.allShipsSunk).toBeFalsy();
});

test("check for two sunk", () => {
  const ship = new Ship("patrol", 1);
  const ship2 = new Ship("destroyer", 1);
  const board = new GameBoard();
  board.placeShip(ship, "vertical", 4, 8);
  board.placeShip(ship2, "horizontal", 0, 0);
  board.receiveAttack(null, 4, 8);
  board.receiveAttack(null, 0, 0);
  board.checkForSunk();

  expect(board.allShipsSunk).toBeTruthy();
});
