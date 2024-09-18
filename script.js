const playButton = document.querySelector(".play");

// playButton.addEventListener("click", gameBoard());

console.log(playButton);
//Make the players function
//Make game board function

function createGameBoard() {

    //MAKE THE GAME IN THE CONSOLE
    //use `` for whitespace
    //finish making the board and incorporate a player function
    return [
        null, null, null,
        null, null, null,
        null, null, null
    ]
    // Make sure to put this code above the return cutie
    // Or it no worky
        let player = prompt("Enter player name", "Mario");
         //set condition to not acccept null


}

createGameBoard();


function createPlayer(name, piece, score) {
    return {
        name,
        piece,
        score
    }
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