import { Ship } from "./ship"


const domHandler = (() => {
    let direction = 'horizontal'
    let player1 = ''
    let player2 = ''
    let gameStart = false

    function setPlayers (p1, p2){
        player1 = p1
        player2 = p2
    }

    function updatePlayerDom(x,y,state){
        const elements = document.querySelectorAll('.playercell')
        
        for (var i = 0; i<elements.length; i++){
            let dataValue = elements[i].getAttribute('data')

            let data = dataValue.split(',')
            let dataX = parseInt(data[0])
            let dataY = parseInt(data[1])
            if (dataX === x && dataY=== y){
              if(state === 'hit')  {elements[i].classList.add('hit')
                elements[i].classList.remove('highlighted')
            }
              else{
                elements[i].classList.add('miss')
              }
            }
            

        }
    }

    function updatePlayerDomPlacement(playerboard,playercells){
        let shipArray = playerboard.getshipPlacement()
        let nestedArrays = shipArray.map(function(obj){
            return obj.coordinates
        })
        let flattenedArray = [].concat.apply([],nestedArrays)
        
        for(var index = 0; index < flattenedArray.length; index++)
        {for (var i = 0; i < playercells.length; i++) {
            var dataValue = playercells[i].getAttribute('data');
            
            // Split the data value into x and y coordinates
            var coordinates = dataValue.split(',');
            var x = parseInt(coordinates[0]);
            var y = parseInt(coordinates[1]);
            
            // Check if the coordinates match the desired combination
            if (x === flattenedArray[index][0] && y === flattenedArray[index][1]) {
              // Perform the desired action on the matching element
              playercells[i].classList.add('highlighted');
            }
          }}

        
    }
    function endGame(player){
        let name = player.name
        domHandler.displayConsole(`${name} lost! Reload the page to play again!`)
    }

    function playerPlacement(playerBoard){
        let destroyer1 = new Ship('destroyer',3)
        let destroyer2 = new Ship('destroyer',3)
        let patrol = new Ship('patrol',2)
        let submarine = new Ship('submarine', 4)
        let carrier = new Ship('carrier',5)

        let shipArray = [carrier,submarine,destroyer2,destroyer1,patrol]
        domHandler.displayConsole('Welcome to Battleship! Start the game by placing your carrier on the player board')

        let playerCells = document.querySelectorAll('.playercell')
        playerCells.forEach(function(playerCell) {
            playerCell.addEventListener('click', function(e){
              if(shipArray.length > 0){
              const coordinates = this.getAttribute('data')

              if(playerBoard.checkPlacementLegality(shipArray[0],direction,parseInt(coordinates[0]),parseInt(coordinates[2])))
              {playerBoard.placeShip(shipArray[0],direction,parseInt(coordinates[0]),parseInt(coordinates[2]))
              shipArray.shift()
              if(shipArray.length > 0) {domHandler.displayConsole(`Place your ${shipArray[0].name}`)} else{
                domHandler.displayConsole('All ships placed! Continue by guessing on the NPC board')
                gameStart = true
              }
            }else{domHandler.displayConsole('choose a legal placement')}}
            domHandler.updatePlayerDomPlacement(playerBoard,playerCells)
            });
          });

    }



    function addEventListenerBTNS(){
        let directionBTN = document.getElementById('direction')
        directionBTN.addEventListener('click', function(e){
            if(directionBTN.textContent === 'Horizontal'){
                direction = 'vertical'
                directionBTN.textContent = 'Vertical'

            } else{
                direction = 'horizontal'
                directionBTN.textContent = 'Horizontal'
            }
        })
    }


    function displayConsole(string){
        let console = document.querySelector('.console')
        console.textContent = string
    }

    function checkLegal(e){
        if(!e.target.classList.contains('hit')&&!e.target.classList.contains('miss') && gameStart){
            return true

        }
         return false
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
                if(player1.getTurn()&&checkLegal(e)){player1.attack(e,parseInt(data[0]),parseInt(data[2]),board2,player2)}
                
                
                
            })

            cpuContainer.appendChild(cell)
        }
    }
    function setGameStart(value){
        gameStart = value
    }
    return{
        generateBoards,
        setPlayers,
        updatePlayerDom,
        displayConsole,
        addEventListenerBTNS,
        playerPlacement,
        updatePlayerDomPlacement,
        endGame,
        setGameStart
    }

})()

export {domHandler}