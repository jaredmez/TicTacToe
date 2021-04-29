
const gameBoard = (() => {
    let board = [];

    const push = (position, player) => {
        if (player == 'X') {
            board[position] = 'X'
        }
        else {
        board[position] = 'O'
        }
    };

    const showBoard = () => console.log(board);

    return {push, showBoard};
}
)();


const player = (pname,choice) => {
    return {pname, choice}
}