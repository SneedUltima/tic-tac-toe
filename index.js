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
    let board = ["","","","","","","","",""];
    for(i = 0; i < board.length; i++) {
        const div = document.createElement("div")
        div.addEventListener("click", (e) => {
            displayController(e)
        })
        div.classList.add(`grid`, `grid-${i}`)
        div.textContent = board[i]
        boardContainer.appendChild(div)
    }
    return board;
})();

const displayController = function(e) {
    const grid = document.querySelector(".grid")
    if(player1.turn && !player2.turn) {
        e.target.textContent = player1.symbol
        player1.turn = false;
        player2.turn = true;
    }
    else if(!player1.turn && player2.turn) {
        e.target.textContent = player2.symbol
        player1.turn = false;
        player2.turn = true;
    }
};

console.log(player1.symbol);