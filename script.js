"use strict"

window.addEventListener('DOMContentLoaded', () => {
console.log("DOM content fully loaded!!");

    document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("click", playerHand);
    });
});


// Variables
let playerChoice;
let computerChoice;
let options = ["rock", "paper", "scissors"];
let loss = document.querySelector("#lose");
let win = document.querySelector("#win");
let draw = document.querySelector("#draw");
let messages = [loss, win, draw];



function playerHand(){
    // reset hand
    document.querySelectorAll(".player").forEach((hand) => {
        hand.style.backgroundImage = "url(hand_rock.png)";
        hand.classList.remove("shake");
    });
    // clear text
    messages.forEach((message) => {
        message.classList.add("hidden");
    });

    playerChoice = this.className;

    console.log(`"Computer chooses ${playerChoice}"`)

    computerHand();
}


function computerHand(){
    computerChoice = options[Math.floor(Math.random()*3)];
    console.log(`"Computer chooses ${computerChoice}"`)
    startShake();
}


function startShake(){
    document.querySelectorAll(".player").forEach((hand) => {
    hand.classList.add("shake");
    });
    document.querySelector("#player1").addEventListener("animationend", showHands);
}


function showHands(){
    document.querySelector("#player1").style.backgroundImage = `url(hand_${playerChoice}.png)`;
    document.querySelector("#player2").style.backgroundImage = `url(hand_${computerChoice}.png)`;
    document.querySelectorAll(".player").forEach((hand) => {
        hand.classList.remove("shake");
        });
    determineWinner();
}


function determineWinner(){

// if statements which determines the winner of  the game

if (playerChoice == "rock") {
    if (computerChoice == "rock") {
        draw.classList.remove("hidden");
    }
    else if (computerChoice == "paper") {
        loss.classList.remove("hidden");
    }
    else if (computerChoice == "scissors") {
        win.classList.remove("hidden");
    }
}

if (playerChoice == "paper") {
    if (computerChoice == "paper") {
        draw.classList.remove("hidden");
    }
    else if (computerChoice == "rock") {
        win.classList.remove("hidden");
    }
    else if (computerChoice == "scissors") {
        loss.classList.remove("hidden");
    }
}

if (playerChoice == "scissors") {
    if (computerChoice == "scissors") {
        draw.classList.remove("hidden");
    }
    else if (computerChoice == "rock") {
        loss.classList.remove("hidden");
    }
    else if (computerChoice == "paper") {
        win.classList.remove("hidden");
    }
}

}
