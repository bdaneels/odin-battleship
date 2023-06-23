class GameBoard {
  constructor() {
    this.shipPlacement = [];
    this.board = [];
    this.misses = [];
    this.allShipsSunk = false;
  }

  getBoard() {
    return this.board
  }

  constructBoard() {
    let x = 0;
    for (let y = 0; x < 10; y++) {
      if (y === 10) {
        y = -1;
        x += 1;
      } else {
        this.board.push([x, y]);
      }
    }
    return this.board;
  }

  placeShip(ship, direction, x, y) {
    function createObject(ship, direction, x, y) {
      const obj = {
        ship: ship,
        direction: direction,
        coordinates: [x, y],
      };
      return obj;
    }
    this.shipPlacement.push(createObject(ship, direction, x, y));
  }

  getshipPlacement() {
    return this.shipPlacement;
  }

  receiveAttack(e, x, y) {
    let array = this.shipPlacement;
    if (
      array.some(obj => obj.coordinates[0] === x && obj.coordinates[1] === y)
    ) {
      let result = array.find(
        (obj) => obj.coordinates[0] === x && obj.coordinates[1] === y)
      result.ship.hit();
      e.target.classList.add('hit');
      
    } else {
      this.misses.push([x, y]);
      e.target.classList.add('miss')
    }
  }

  checkForSunk() {
    let array = this.shipPlacement;
    let result = array.find((obj) => obj.ship.isSunk() === false);
    if (!result) {
      this.allShipsSunk = true;
    } else {
      return false;
    }
  }
}

export { GameBoard };
