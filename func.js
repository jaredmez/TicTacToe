
const gameBoard = (() => {
    let board = ['O','X','X','','O','X','','',''];

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

/* const gameControl = (() => {
    const start = ()
}
)(); */


const display = () => {
gridItems = document.querySelector('.grid-container').getElementsByTagName("div");

for (i = 0; i < 9; i++) {
    if (!gameBoard.isBlank(i)) {
        gridItems[i].innerText = gameBoard.board[i];
    }
}
}

display();

