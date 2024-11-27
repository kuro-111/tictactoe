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

return {
  gameBoard: [null, null, null, null, null, null, null, null, null],
  currentPlayer: "Player One",
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

function drawCheck(){
  const draw  = gameBoard.gameBoard.every((square) => square !==null
  );

  if (draw) {
    // Display draw
    console.log('Draw!');

    gameBoard = createGameBoard();
  }

}

function gameLogic(){
  const players = setupPlayers();

  const player1 = players[0]; 
  const player2 = players[1];

  const currentPlayer = Math.floor(Math.random() * 2) === 0 ? player1 : player2;

  const gameBoard = createGameBoard(); 

}

function gameStart(player){
  let name1 = prompt("Enter player 1 name", "Mario");

  if (name1 == null){
    return {};
  }

  while (name1 == '') {
    name1 = prompt("Enter player 1 name", "Mario");
  }

  let piece1 = prompt("x or O");

  if (piece1 == null){
    return {};
  }
  
  while (piece1 != "X" && piece1 != "O") {
    piece1 = prompt("X or O");
  }
  
  let score1 = 0;

  let player1 = createPlayer(name1, piece1, score1);

  console.log(player1);

  let player2 = createPlayer(name, piece, score);

  console.log(player2);

  console.log("here");
  
  const board = createGameBoard();

  console.log(board);
}





// let boardGrid = document.createElement("div");
// boardGrid.classList.add("parent-grid");

// for(i = 0; i < 3; i++){
//     let boardGridRow = document.createElement("div");

//     boardGrid.appendChild(boardGridRow);

//     for(j = 0; j < 3; j++){
//         let boardGridColumn = document.createElement("div");
//     }
// }
