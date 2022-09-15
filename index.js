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

const displayController =(() => {

})();

//  Player factory function
function player() {
    const player1 = "x";
    const player2 = "o";
    let score = 0;
    let turn = 0;

    return{player1, player2}
}

