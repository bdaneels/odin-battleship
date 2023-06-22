class Ship {
  constructor(name, length) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
    this.name = name;
  }

  hit() {
    this.hits++;
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}

function sinkShip() {
  let myShip = new Ship(3);
  myShip.hit();
  myShip.hit();
  myShip.hit();
  return myShip.isSunk();
}

export { Ship, sinkShip };
