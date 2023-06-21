import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.shipPlacement = [];
    this.board = []
  }

  constructBoard() {
    let x = 0;
    for (let y = 0; x < 10; y++) {
      if (y === 9) {
        y = 0;
        x += 1
        this.board.push([x, y])
      } else {
        this.board.push([x,y])
      }
    }
    return this.board
  }

  placeShip(ship,direction, x, y) {
    function createObject(ship, direction, x, y) {
      const obj = {
        ship: ship,
        direction: direction,
        coordinates: [x, y],
      };
      return obj;
    }
    this.shipPlacement.push(createObject(ship,direction, x, y));
  }

  getshipPlacement() {
    return this.shipPlacement;
  }

  recieveAttack(x, y) {
      let array = this.shipPlacement;
      if (array.some(obj => obj.coordinates[0] === x && obj.coordinates[1] === y)) {
          console.log('im hit')
      }
      
  }
}


export {GameBoard};
