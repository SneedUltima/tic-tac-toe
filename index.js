const boardContainer = document.querySelector(".game-board")

//  Player factory function
function player(symbol, score, turn) {
    return {
        symbol, score, turn
    }
}

const player1 = player("X", 0, true)
const player2 = player("O", 0, false)

const winConditions = [
    [0,1,2],
    [3,4,5],
]

const gameBoard = (() => {
    const board = { 
        gameBoard: ["","","","","","","","",""]
    };
    board.gameBoard.forEach(function(element,index) {
            const div = document.createElement("div")
            div.addEventListener("click", (e) => {
                displayController(e, index)
                checkWin(player1.symbol)
                checkWin(player2.symbol)
            })
            div.classList.add(`grid`, `grid-${board.gameBoard[index]}`)
            div.textContent = board.gameBoard[index]
            boardContainer.appendChild(div)
        })
        return {board};
    })();

const displayController = function(e, index) {
    board = gameBoard.board.gameBoard
    if(player1.turn && !player2.turn) {
        e.target.textContent = player1.symbol
        board[index] = player1.symbol
        player1.turn = false;
        player2.turn = true;
    }
    else if(!player1.turn && player2.turn) {
        e.target.textContent = player2.symbol
        board[index] = player2.symbol
        player1.turn = true;
        player2.turn = false;
    }
};

const checkWin = function(symbol) {
    board = gameBoard.board.gameBoard
    for(condition in winConditions){
        if(board[winConditions[0]] && board[winConditions[1]] && board[winConditions[2]] === symbol){
            console.log("winner");
        }
    }
    // if(board[0] && board[1] && board[2] === symbol){
    //     console.log("winner");
    // }
    // if(board[3] && board[4] && board[5] === symbol){
    //     console.log("winner");
    // }
    // if(board[6] && board[7] && board[8] === symbol){
    //     console.log("winner");
    // }
    // if(board[0] && board[3] && board[6] === symbol){
    //     console.log("winner");
    // }
    // if(board[1] && board[4] && board[7] === symbol){
    //     console.log("winner");
    // }
    // if(board[2] && board[5] && board[8] === symbol){
    //     console.log("winner");
    // }
    // if(board[0] && board[4] && board[8] === symbol){
    //     console.log("winner");
    // }
    // if(board[2] && board[4] && board[6] === symbol){
    //     console.log("winner");
    // }
}