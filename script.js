const playButton = document.querySelector(".play");

// playButton.addEventListener("click", gameBoard());

console.log(playButton);
//Make the players function
//Make game board function


function createPlayer(name, piece) {


  return {
    name: name,
    piece: piece,
    score: 0
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
