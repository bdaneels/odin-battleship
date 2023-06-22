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
    
    attack(x, y, enemyBoard, enemyPlayer) {
    if (this.turn) {
    enemyBoard.receiveAttack(x, y);
    enemyPlayer.setTurn();
    this.endTurn();
    }  

    
  }
}
