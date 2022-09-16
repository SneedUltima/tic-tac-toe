const boardContainer = document.querySelector(".game-board")

//  Player factory function
function player(symbol, score, turn) {
    return {
        symbol, score, turn
    }
}

const player1 = player("X", 0, true)
const player2 = player("O", 0, false)

const gameBoard = (() => {
    const board = { 
        gameBoard: ["","","","","","","","",""]
    };
    board.gameBoard.forEach(function(element,index) {
            const div = document.createElement("div")
            div.addEventListener("click", (e) => {
                displayController(e, index)
            })
            div.classList.add(`grid`, `grid-${board.gameBoard[index]}`)
            div.textContent = board.gameBoard[index]
            boardContainer.appendChild(div)
        })
        return {board};
    })();

const displayController = function(e, index) {
    board = gameBoard.board.gameBoard
    // if(board[0],board[1],board[2] === "X"){
    //     console.log("player 1 win");
    // }
    if(player1.turn && !player2.turn) {
        e.target.textContent = player1.symbol
        board[index] = player1.symbol
        player1.turn = false;
        player2.turn = true;
        console.log(board);
    }
    else if(!player1.turn && player2.turn) {
        e.target.textContent = player2.symbol
        board[index] = player2.symbol
        player1.turn = true;
        player2.turn = false;
    }
};

console.log(player1.symbol);