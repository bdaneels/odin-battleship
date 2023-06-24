export const botAI = (() => {
    let humanBoard = ''
    let humanPlayer =''
    let movesArray = ''
    let cpuPlayer = ''

    function setBoard(playerBoard,player,cpu){
        humanBoard = playerBoard
        humanPlayer = player
        movesArray = playerBoard.getBoard()
        cpuPlayer = cpu
    }

    function turn() {
        const randomCoord = (movesArray) => movesArray.splice((Math.random() * movesArray.length) | 0, 1);
        let result = randomCoord(movesArray)
        const x = result[0][0]
        const y = result[0][1]
        cpuPlayer.attack(null, x, y,humanBoard,humanPlayer)
    }

    return {
        setBoard,
        turn
    }

})()