import { botAI } from "./ai";

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
    
    this.endTurn() 
    if (this.name === 'human'){botAI.turn()}
    
    }  

    
  }
}
