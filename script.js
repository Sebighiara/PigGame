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

//roll dice functionallity
rollDiceBtn.addEventListener("click", function () {
  //dice number
  let dice = Math.trunc(Math.random() * 6) + 1;

  //change dice picture with dice number
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (activePlayer === 0) {
    if (dice !== 1) {
      currentScore += dice;
      currentScore0El.textContent = currentScore;
    } else {
      currentScore = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      activePlayer = 1;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      currentScore0El.textContent = currentScore;
    }
  } else {
    if (dice !== 1) {
      currentScore += dice;
      currentScore1El.textContent = currentScore;
    } else {
      currentScore = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      activePlayer = 0;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
      currentScore1El.textContent = currentScore;
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (activePlayer === 0) {
    currentScore0El.textContent = 0;
    scores[activePlayer] += currentScore;
    score0Element.textContent = scores[activePlayer];
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    activePlayer = 1;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
  } else {
    currentScore1El.textContent = 0;
    scores[activePlayer] += currentScore;
    score1Element.textContent = scores[activePlayer];
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    activePlayer = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
  }

  currentScore = 0;
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

/*
//selecting elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

let activePlayer = 0;

//hide dice at the beginning
diceEl.classList.add("hidden");

//initialize score
let currentScore = [0, 0];

//Rolling dice functionallity
rollDiceBtn.addEventListener("click", function () {
  //generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice element
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  //check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    currentScore[activePlayer] += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore[activePlayer];
  } else {
    //change side
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
  }
});
*/
