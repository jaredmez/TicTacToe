
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

    const isBlank = (index) => {
        if (board[index] == '') {
            return true
        }
        else return false;
    }

    return {board, push, showBoard, isBlank};
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


// const display = () => {
// gridItems = document.querySelector('.grid-container').getElementsByTagName("button");

// for (i = 0; i < 9; i++) {
//     if (!gameBoard.isBlank(i)) {
//         gridItems[i].innerText = gameBoard.board[i];
//     }
// }
// }

gridItems = Array.from(document.querySelector('.grid-container').getElementsByTagName("button"));
console.log(gridItems);
gridItems.forEach(item => item.addEventListener('click', markBoard));

function markBoard(e) { 
    let currentMark = gameControl.play();
    let gridLocation= e.target.className;
    gameBoard.push(gridLocation-1, currentMark);
    console.log(currentMark);
};

