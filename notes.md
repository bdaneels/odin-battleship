given the code below why can the array.some methode not find any matches when it is expected to find the right coordinates?

array.some(obj => obj.coordinates[0] === x && obj.coordinates[1] === y)

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