export const botAI = (() => {
    let humanBoard = ''
    let humanPlayer =''
    let movesArray = ''

    function setBoard(playerBoard,player){
        humanBoard = playerBoard
        humanPlayer = player
        movesArray = playerBoard.getBoard()
    }

    function turn() {
        
    }

    return {
        setBoard,
        turn
    }

})()