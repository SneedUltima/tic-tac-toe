const boardContainer = document.querySelector(".game-board")

const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    for(i = 0; i < board.length; i++) {
        const div = document.createElement("div")
        div.addEventListener("click", () => {
            console.log("hello");
        })
        div.classList.add(`grid`, `grid-${i}`)
        div.textContent = board[i]
        boardContainer.appendChild(div)
    }
    return board;
})();

//  Player factory function
function player(symbol, score, turn) {
    return {
        symbol, score, turn
    }
}

const player1 = player("x", 0, 0)
const player2 = player("o", 0, 0)

const displayController =(() => {
    if(player1.turn === 0 && player2.turn === 0) {
        console.log("hello");
    }
})();

console.log(player1.symbol);