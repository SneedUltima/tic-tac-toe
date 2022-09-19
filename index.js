const gameStart = document.querySelector(".game-start")
const boardContainer = document.querySelector(".game-board")
const body = document.querySelector(".body-container")
const gameResult = document.querySelector("#game-result")
let player1Score = document.querySelector("#player-1-score")
let player2Score = document.querySelector("#player-2-score")

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
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const gameBoard = (() => {
    const board = { 
        gameBoard: ["","","","","","","","",""]
    };
    board.gameBoard.forEach(function(element,index) {
            const div = document.createElement("div")
            div.classList.add(`grid`);
            div.textContent = board.gameBoard[index]
            boardContainer.appendChild(div)
            div.addEventListener("click", (e) => {
                displayController(e, index)
                if(!board.gameBoard.includes("")){
                    console.log("Game Tie");
                    clearDisplay()
                    gameResult.textContent = "Game is a tie!"
                }
                if(checkWin(player1, player1.symbol) === true) {
                    winner(player1)
                    player1Score.textContent = player1.score
                    clearDisplay()
                    gameResult.textContent = "Player 1 Wins!"
                }
                if(checkWin(player2, player2.symbol) === true) {
                    winner(player2)
                    player2Score.textContent = player2.score
                    console.log("player2");
                    clearDisplay()
                    gameResult.textContent = "Player 2 Wins!"
                }
            })
        })
        player1Score.textContent = player1.score
        player2Score.textContent = player2.score
        return {board};
    })();

const clearDisplay = function() {
    const grid = document.querySelectorAll(".grid")
    console.log(grid);
    grid.forEach((e) => {
        e.textContent = "";
    })
    gameBoard.board.gameBoard = ["","","","","","","","",""]
}

const displayController = function(e, index) {
    board = gameBoard.board.gameBoard
    if(player1.turn && !player2.turn) {
        if(e.target.textContent === "X" ||
        e.target.textContent === "O") {
            return;
        }
        e.target.textContent = player1.symbol
        board[index] = player1.symbol
        player1.turn = false;
        player2.turn = true;
    }
    else if(!player1.turn && player2.turn) {
        if(e.target.textContent === "X" ||
        e.target.textContent === "O") {
            return;
        }
        e.target.textContent = player2.symbol
        board[index] = player2.symbol
        player1.turn = true;
        player2.turn = false;
    }
};

const checkWin = function(player, symbol) {
    board = gameBoard.board.gameBoard
    for(condition in winConditions) {
        if(board[winConditions[condition][0]] === symbol && board[winConditions[condition][1]] === symbol && board[winConditions[condition][2]] === symbol){
            console.log("winner");
            return true;
        }
    }
}

const winner = function(player) {
    player.score ++;
    `${player}Score`.textContent = player.score
}

gameStart.addEventListener("click",() => {
    console.log("Hjndfjss");
    body.classList.add("show")
    gameStart.classList.add("hide")
})