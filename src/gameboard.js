class GameBoard {
  constructor() {
    this.shipPlacement = [];
    this.board = [];
    this.misses = [];
    this.allShipsSunk = false;
  }
  getAllShipsSunk(){
    return this.allShipsSunk
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
    let arrayCoordinates = [[x,y]]
    function calculateCoordinates (){
      if(direction === 'vertical'){
        for(let n = 1;n < ship.length; n+=1){
          arrayCoordinates.push([x+n,y])
        }
      } else{
        for(let n = 1;n < ship.length; n+=1){
          arrayCoordinates.push([x,y+n])
        }

      }
    }

    function createObject() {
      const obj = {
        ship: ship,
        direction: direction,
        coordinates: arrayCoordinates,
      };
      return obj;
    }
    calculateCoordinates()
    this.shipPlacement.push(createObject());
  }

  getshipPlacement() {
    return this.shipPlacement;
  }

  receiveAttack(e, x, y) {
    let array = this.shipPlacement;
    if (array.some((obj) => obj.coordinates.some(([xCoord, yCoord]) => xCoord === x && yCoord === y))) {
      let result = array.find((obj) => obj.coordinates.some(([xCoord, yCoord]) => xCoord === x && yCoord === y));
      result.ship.hit();
      e.target.classList.add("hit");
      this.checkForSunk();
    } else {
      this.misses.push([x, y]);
      e.target.classList.add("miss");
    }
  }

  checkForSunk() {
    let array = this.shipPlacement;
    let result = array.find((obj) => obj.ship.isSunk() === false);
    if (!result) {
      this.allShipsSunk = true;
      console.log('all ships sunk')
    } else {
      return false;
    }
  }
}

export { GameBoard };
