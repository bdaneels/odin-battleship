

const domHandler = (() => {
    
    function generatBoards(board1, board2) {
        let playerContainer = document.getElementById('player')
        let cpuContainer = document.getElementById('cpu')
        for (let coordinates of board1.constructBoard()){
            let cell = document.createElement('div')
            cell.setAttribute('class', 'playercell')
            cell.setAttribute('data', coordinates)
            playerContainer.appendChild(cell)
        }
        for (let coordinates of board2.constructBoard()){
            let cell = document.createElement('div')
            cell.setAttribute('class', 'cpucell')
            cell.setAttribute('data', coordinates)
            cpuContainer.appendChild(cell)
        }
    }

    return{
        generatBoards
    }

})()

export {domHandler}