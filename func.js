
//--------------------GAMEBOARD CONTROL---------------------
const gameBoard = (() => {
    let board = ['','','','','','','','',''];
    let moveCounter=0;

    const push = (position, player) => {
        moveCounter++;
        console.log(moveCounter);
        if (player == 'X') {
            board[position] = 'X'
        }
        else {
        board[position] = 'O'
        }
    };

    const showBoard = (status) => {
        let statusEl = document.querySelector(".gameStatus");
        statusEl.innerHTML=status;

    };

    const check = () => {
       
        if (board[0] != '' && board[0]===board[1] && board[0] === board[2]) {
            return board[0]
        }
        else if (board[3] != '' && board[3]===board[4] && board[3] === board[5]) {
            return board[3]
        }
        else if (board[6] != '' && board[6]===board[7] && board[6] === board[8]) {
            return board[6]
        }
        else if (board[0] != '' && board[0]===board[3] && board[0] === board[6]) {
            return board[0]
        }
        else if (board[1] != '' && board[1]===board[4] && board[1] === board[7]) {
            return board[1]
        }
        else if (board[2] != '' && board[2]===board[5] && board[2] === board[8]) {
            return board[2]
        }
        else if (board[0] != '' && board[0]===board[4] && board[0] === board[8]) {
            return board[0]
        }
        else if (board[2] != '' && board[2]===board[4] && board[2] === board[6]) {
            return board[2]
        }
        else return false;

    };

    const presentResult = (currentMove) => {
        if (moveCounter ===9 && check()===false) {
            showBoard('Result= Tie!')
        }
        else if (check()===false) {
            showBoard(currentMove + 's turn');
        }
        else if (check()==='X' || check()==='O') {
            showBoard('The winner is ' + check());
        }
    }

    const isBlank = (index) => {
        if (board[index] == '') {
            return true
        }
        else return false;
    }

    return {board, moveCounter,push, showBoard, check, presentResult, isBlank};
}
)();

//--------------------PLAYER CONTROL---------------------
const player = (pname,choice) => {

    return {pname, choice, playerSetup}
}

//--------------------GAME CONTROL---------------------




const gameControl = (() => {
    let count = 0;

    const setup = () => {
        displayControl.playerForm();
    }
    
    const play = () => {
        if (count % 2 == 0) {
            count++;
            return 'X'
        }
        else count++;
            return 'O';
    }
    return {play, setup};
}
)();

startBtn = document.querySelector('#startBtnContainer');
startBtn.addEventListener('click', gameControl.setup);


//add onclick event to all grid squares
gridItems = Array.from(document.querySelector('.grid-container').getElementsByTagName("button"));
gridItems.forEach(item => item.addEventListener('click', markBoard));


//--------------------DISPLAY CONTROL---------------------

//square onclick handler


const displayControl = (() => {
    playerForm = () => {
        playerFormEl = document.querySelector('#playerForm');
        playerFormEl.style.display = "block";

    }

    return {playerForm}

})();

function markBoard(e) { 
    let currentMark = gameControl.play();
    let gridLocation= e.target.className;
    gridItems.forEach(item => {
        if (item.className === gridLocation) {
            item.innerHTML = currentMark;
            item.removeEventListener("click", markBoard);
            
        }
    })
    gameBoard.push(gridLocation-1, currentMark);
    gameBoard.check();
    gameBoard.presentResult(currentMark);
};
