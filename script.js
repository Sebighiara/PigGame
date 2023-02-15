"use strict";

//selecting elems
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//hide dice when starting the game
diceEl.classList.add("hidden");

let activePlayer = 0;

//initialize score
let currentScore = 0;
let scores = [0, 0];

//function to modify current score of the active player
const modifyCurrentScore = (activePlayer) => {
  activePlayer === 0
    ? (currentScore0El.textContent = currentScore)
    : (currentScore1El.textContent = currentScore);
};

//function to modify score of the active player
const modifyScore = (activePlayer) => {
  activePlayer === 0
    ? (score0Element.textContent = scores[activePlayer])
    : (score1Element.textContent = scores[activePlayer]);
};

//change side of active player
const changeSide = (activePlayer) => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

//change active player
const changeActivePlayer = (activePlayer) => (activePlayer === 0 ? 1 : 0);

//roll dice functionallity
rollDiceBtn.addEventListener("click", function () {
  //dice number
  let dice = Math.trunc(Math.random() * 6) + 1;

  //change dice picture with dice number
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    modifyCurrentScore(activePlayer);
  } else {
    currentScore = 0;
    modifyCurrentScore(activePlayer);
    changeSide(activePlayer);
    activePlayer = changeActivePlayer(activePlayer);
  }
});

holdBtn.addEventListener("click", function () {
  scores[activePlayer] += currentScore;
  currentScore = 0;
  modifyCurrentScore(activePlayer);
  modifyScore(activePlayer);
  changeSide(activePlayer);
  activePlayer = changeActivePlayer(activePlayer);
});

newGameBtn.addEventListener("click", function () {
  diceEl.classList.add("hidden");
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  document.querySelector(`.player--0`).classList.add("player--active");
  document.querySelector(`.player--1`).classList.remove("player--active");
});
