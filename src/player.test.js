import { GameBoard } from './gameboard.js'
import Player from './player.js'


test('playernaming', () => {
    const player1 = new Player('name')
    player1.setName('jef')
    expect(player1.getName()).toBe('jef')
})

test('attack function leads to other player turn', () => {
    const player1 = new Player('Jef')
    const player2 = new Player('cpu')
    const cpuBoard = new GameBoard()
    const playerBoard = new GameBoard()
    player1.setTurn()
    player1.attack(6,4,cpuBoard,player2)


    expect(player2.getTurn()).toBeTruthy()
})

test('attack function ends current player turn', () => {
    const player1 = new Player('Jef')
    const player2 = new Player('cpu')
    const cpuBoard = new GameBoard()
    const playerBoard = new GameBoard()
    player1.setTurn()
    player1.attack(6,4,cpuBoard,player2)


    expect(player1.getTurn()).toBeFalsy()
})