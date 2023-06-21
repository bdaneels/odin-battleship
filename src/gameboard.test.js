import { GameBoard, Gameboard, mockplacement } from "./gameboard.js";
import { Ship } from "./ship.js";


beforeAll(() => {
  
});

test("register ship placement", () => {

  const ship = new Ship('patrol', 3)
  const board = new GameBoard
  board.placeShip(ship,4,8)

  expect(board.getshipPlacement()).toEqual([{
    coordinates: [4, 8],
    ship: { hits: 0, length: 3, name:'patrol', sunk: false }
  }]);
});


