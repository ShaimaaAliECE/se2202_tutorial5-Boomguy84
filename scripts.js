let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let player = document.getElementById("next-lbl");
player.innerHTML = nextPlayer;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard() {
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 1; i < 10; i++) {
        let tablecell = document.getElementById("c" + i);
        let btn = document.createElement("button");
        btn.innerHTML = "[ ]";
        tablecell.appendChild(btn);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => { takeCell(event) });
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event) {
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    let button = event.path[0];
    button.innerHTML = "[" + nextPlayer + "]";
    if (nextPlayer == "X") {
        nextPlayer = "O";
    }
    else {
        nextPlayer = "X";
    }
    button.disabled = true;

    let player = document.getElementById("next-lbl");
    player.innerHTML = nextPlayer;


    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver()) {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let gameOver = document.getElementById("game-over-lbl");
        let h1 = document.createElement("h1");
        h1.innerHTML = "Game Over";
        gameOver.appendChild(h1);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver() {
    // This function returns true if all the buttons are disabled and false otherwise 
    for (let i = 1; i < 10; i++) {
        let button = document.getElementById("c" + i).firstChild;

        if (button.disabled == false) {
            return false;
        }
    }
    return true;
}
