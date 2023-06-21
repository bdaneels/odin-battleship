import { Ship } from "./ship";

class GameBoard {
  constructor() {
    this.shipPlacement = [];
  }

  placeShip(ship, x, y) {
    function createObject(ship, x, y) {
      const obj = {
        ship: ship,
        coordinates: [x, y],
      };
      return obj;
    }
    this.shipPlacement.push(createObject(ship, x, y));
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
