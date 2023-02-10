// Create Variables for the game states
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create Variables to store references to the neccessary DOM nodes

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
let storePlayers = ["Player 1 Turn", "Player 2 Turn"];
/* Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */

 rollBtn.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1;
    //  console.log(randomNumber);

     // 1. Find out which players turn it is
     if(player1Turn){
        player1Score += randomNumber;
        player1Scoreboard.textContent = player1Score;
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 1 Turn"; 
        //  console.log("Player 1 Turn " + randomNumber);
     } else{
        // console.log("Player 2 Turn " + randomNumber);
        player2Score += randomNumber;
        player2Scoreboard.textContent = player2Score;
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 2 Turn"; 
     }
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player

    //  if(player1Turn){
    //      player1Turn = false;
    //  }else{
    //      player1Turn = true;
    //  }

        // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

    if(player1Score >= 20){
        message.textContent = "Player 1 has Won! 🥳";
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
    }else if(player2Score >= 20){
        message.textContent = "Player 2 has Won! 🎉";
        rollBtn.style.display = "none";
        resetBtn.style.display = "block";
    }
     player1Turn = !player1Turn;

 })

 // 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked

function togglePlayers(){
    let randomPlayer = Math.random() * storePlayers.length;
    let fixPlayer = Math.floor(randomPlayer);
    message.textContent = storePlayers[fixPlayer];
    if(fixPlayer === 0){
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active"); 
    }else if(fixPlayer === 1){
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
    }
}


resetBtn.addEventListener("click", function() {
    reset()
})

function reset() {
    togglePlayers();
    player1Scoreboard.textContent = 0;
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    // player2Dice.classList.remove("active");
    // player1Dice.classList.add("active");
}