
const gameBoard = (() => {
    let board = ['','','','','','','','',''];

    const push = (position, player) => {
        if (player == 'X') {
            board[position] = 'X'
        }
        else {
        board[position] = 'O'
        }
    };

    const showBoard = () => console.log(board);

    const check = () => {
        if (board[0] != '' && board[0]===board[1] && board[0] === board[2]) {
            console.log('we have a winner')
        }
        else if (board[3] != '' && board[3]===board[4] && board[3] === board[5]) {
            console.log('we have a winner')
        }
        else if (board[6] != '' && board[6]===board[7] && board[6] === board[8]) {
            console.log('we have a winner')
        }
        else if (board[0] != '' && board[0]===board[3] && board[0] === board[6]) {
            console.log('we have a winner')
        }
        else if (board[1] != '' && board[1]===board[4] && board[1] === board[7]) {
            console.log('we have a winner')
        }
        else if (board[2] != '' && board[2]===board[5] && board[2] === board[8]) {
            console.log('we have a winner')
        }
        else if (board[0] != '' && board[0]===board[4] && board[0] === board[8]) {
            console.log('we have a winner')
        }
        else if (board[2] != '' && board[2]===board[4] && board[2] === board[6]) {
            console.log('we have a winner')
        }
    };

    const isBlank = (index) => {
        if (board[index] == '') {
            return true
        }
        else return false;
    }

    return {board, push, showBoard, check, isBlank};
}
)();


const player = (pname,choice) => {
    return {pname, choice}
}

const gameControl = (() => {
    let count = 0;
    
    const play = () => {
        if (count % 2 == 0) {
            count++;
            return 'X'
        }
        else count++;
            return 'O';
    }
    return {play};
}
)();

//add onclick event to all grid squares
gridItems = Array.from(document.querySelector('.grid-container').getElementsByTagName("button"));
gridItems.forEach(item => item.addEventListener('click', markBoard));


//square onclick handler
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
    console.log(currentMark);
};
