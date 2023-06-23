

const domHandler = (() => {
    
    let player1 = ''
    let player2 = ''

    function setPlayers (p1, p2){
        player1 = p1
        player2 = p2
    }

    function generateBoards(board1, board2) {
        const playerContainer = document.getElementById('player')
        const cpuContainer = document.getElementById('cpu')
        for (const coordinates of board1.constructBoard()){
            const cell = document.createElement('div')
            cell.setAttribute('class', 'playercell')
            cell.setAttribute('data', coordinates)
            playerContainer.appendChild(cell)
        }
        for (const coordinates of board2.constructBoard()){
            const cell = document.createElement('div')
            cell.setAttribute('class', 'cpucell')
            cell.setAttribute('data', coordinates)
            cell.addEventListener('click', function (e){
                let data = this.getAttribute('data')
                if(player1.getTurn()){player1.attack(e,parseInt(data[0]),parseInt(data[2]),board2,player2)}
                
                
                
            })

            cpuContainer.appendChild(cell)
        }
    }

    return{
        generateBoards,
        setPlayers
    }

})()

export {domHandler}