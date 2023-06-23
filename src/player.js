export default class Player {
  constructor(name) {
    this.name = name;
    this.turn = false;
  }

  setTurn() {
    this.turn = true;
  }

  getTurn() {
    return this.turn;
  }
    
  endTurn() {
    this.turn = false;
  }
    
  setName(name) {
    this.name = name;
  }
    
  getName() {
    return this.name;
  }
    
    attack(e,x, y, enemyBoard, enemyPlayer) {
    if (this.turn) {
    enemyBoard.receiveAttack(e,x, y);
    enemyPlayer.setTurn();
    /* this.endTurn(); commented out for testing purposes makes the player always have the turn*/ 
    }  

    
  }
}
