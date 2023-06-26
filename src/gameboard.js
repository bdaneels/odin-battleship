import { domHandler } from "./dom";

class GameBoard {
  constructor(player) {
    this.shipPlacement = [];
    this.board = [];
    this.misses = [];
    this.allShipsSunk = false;
    this.player = player;
  }
  getAllShipsSunk() {
    return this.allShipsSunk;
  }

  getBoard() {
    return this.board;
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

  checkPlacementLegality(ship, direction, x, y) {
    let arrayCoordinates = [[x, y]];

    if (direction === "vertical") {
      for (let n = 1; n < ship.length; n += 1) {
        arrayCoordinates.push([x + n, y]);
      }
    } else {
      for (let n = 1; n < ship.length; n += 1) {
        arrayCoordinates.push([x, y + n]);
      }
    }

    function checkArrayForValue(arr, value) {
      for (var i = 0; i < arr.length; i++) {
        var subarray = arr[i];
        for (var j = 0; j < subarray.length; j++) {
          var element = subarray[j];
          if (element >= value) {
            return false;
          }
        }
      }
      return true;
    }

    if (checkArrayForValue(arrayCoordinates, 10)) {
      return true;
    }
  }

  placeShip(ship, direction, x, y) {
    let arrayCoordinates = [[x, y]];
    function calculateCoordinates() {
      if (direction === "vertical") {
        for (let n = 1; n < ship.length; n += 1) {
          arrayCoordinates.push([x + n, y]);
        }
      } else {
        for (let n = 1; n < ship.length; n += 1) {
          arrayCoordinates.push([x, y + n]);
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
    calculateCoordinates();
    this.shipPlacement.push(createObject());
  }

  getshipPlacement() {
    return this.shipPlacement;
  }

  receiveAttack(e, x, y) {
    let array = this.shipPlacement;
    if (e === null) {
      if (
        array.some((obj) =>
          obj.coordinates.some(
            ([xCoord, yCoord]) => xCoord === x && yCoord === y
          )
        )
      ) {
        let result = array.find((obj) =>
          obj.coordinates.some(
            ([xCoord, yCoord]) => xCoord === x && yCoord === y
          )
        );
        result.ship.hit();
        /* logic here for manipulating player board dom */
        domHandler.updatePlayerDom(x, y, "hit");
        this.checkForSunk();
      } else {
        this.misses.push([x, y]);
        domHandler.updatePlayerDom(x, y, "miss");
      }
    } else {
      if (
        array.some((obj) =>
          obj.coordinates.some(
            ([xCoord, yCoord]) => xCoord === x && yCoord === y
          )
        )
      ) {
        let result = array.find((obj) =>
          obj.coordinates.some(
            ([xCoord, yCoord]) => xCoord === x && yCoord === y
          )
        );
        result.ship.hit();
        e.target.classList.add("hit");
        this.checkForSunk();
      } else {
        this.misses.push([x, y]);
        e.target.classList.add("miss");
      }
    }
  }

  checkForSunk() {
    let array = this.shipPlacement;
    let result = array.find((obj) => obj.ship.isSunk() === false);
    if (!result) {
      this.allShipsSunk = true;
      domHandler.endGame(this.player);
      domHandler.setGameStart(false);
    } else {
      return false;
    }
  }
}

export { GameBoard };
