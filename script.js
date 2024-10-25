const playButton = document.querySelector(".play");

playButton.addEventListener("click", gameStart());

console.log(playButton);
//Make the players function
//Make game board function


function createPlayer(name, piece) {


  return {
    name: name,
    piece: piece,
    score: 0,
  };
}


function checkForWin(){
  const win = "no";


}

function createGameBoard() {
  //MAKE THE GAME IN THE CONSOLE
  //use `` for whitespace

return{
  gameBoard: [null, null, null, null, null, null, null, null, null],
  cuurentPlayer: "Player One",
  gameState: "playing | draw | win"
}  
  // Make sure to put this code above the return cutie
  // Or it no worky
  //gameStart(player1);

}

function winCheck(){
  const win = null;

  // 3 in a row horizontally
  if ((gameBoard.gameBoard[0] === currentPlayer.token &&
      gameBoard.gameBoard[1] === currentPlayer.token &&
      gameBoard.gameBoard[2] === currentPlayer.token) ||
    (gameBoard.gameBoard[3] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[5] === currentPlayer.token) ||
    (gameBoard.gameBoard[6] === currentPlayer.token &&
      gameBoard.gameBoard[7] === currentPlayer.token &&
      gameBoard.gameBoard[8] === currentPlayer.token)
) {
    win = "yes";
}
      // 3 in a row vertically
  else if (
  (gameBoard.gameBoard[0] === currentPlayer.token &&
    gameBoard.gameBoard[3] === currentPlayer.token &&
    gameBoard.gameBoard[6] === currentPlayer.token) ||
  (gameBoard.gameBoard[1] === currentPlayer.token &&
    gameBoard.gameBoard[4] === currentPlayer.token &&
    gameBoard.gameBoard[7] === currentPlayer.token) ||
  (gameBoard.gameBoard[2] === currentPlayer.token &&
    gameBoard.gameBoard[5] === currentPlayer.token &&
    gameBoard.gameBoard[8] === currentPlayer.token)
) {
  win = "yes";
}
   // 3 in a row diagonally
  else if (
  (gameBoard.gameBoard[0] === currentPlayer.token &&
     gameBoard.gameBoard[4] === currentPlayer.token &&
     gameBoard.gameBoard[8] === currentPlayer.token) ||
  (gameBoard.gameBoard[2] === currentPlayer.token &&
     gameBoard.gameBoard[4] === currentPlayer.token &&
     gameBoard.gameBoard[6] === currentPlayer.token)
) {
      win = "yes";
     }

     console.log(
      `\n
      ${gameBoard.gameBoard[0]} | ${gameBoard.gameBoard[1]} | ${gameBoard.gameBoard[2]}
      ---------
      ${gameBoard.gameBoard[3]} | ${gameBoard.gameBoard[4]} | ${gameBoard.gameBoard[5]}
      ---------
      ${gameBoard.gameBoard[6]} | ${gameBoard.gameBoard[7]} | ${gameBoard.gameBoard[8]}\n
      `
        );
      

        if (win) {
          // Update current player score
          currentPlayer.score += 1;
      
          // Display winner
          console.log(`${currentPlayer.name} wins!`);
      
          // Reset the game
          gameBoard = createGameBoard();
        }
 
}

function gameStart(player){
  let name = prompt("Enter player name", "Mario");

  if (name == null){
    return {};
  }

  while (name == '') {
    name = prompt("Enter player name", "Mario");
  }

  let piece = prompt("x or O");

  if (piece == null){
    return {};
  }
  
  while (piece != "X" && piece != "O") {
    piece = prompt("X or O");
  }
  
  let score = 0;

  let player1 = createPlayer(name, piece, score);

  console.log(player1);

  console.log("here");
}

createGameBoard();





// let boardGrid = document.createElement("div");
// boardGrid.classList.add("parent-grid");

// for(i = 0; i < 3; i++){
//     let boardGridRow = document.createElement("div");

//     boardGrid.appendChild(boardGridRow);

//     for(j = 0; j < 3; j++){
//         let boardGridColumn = document.createElement("div");
//     }
// }
