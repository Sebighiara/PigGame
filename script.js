"use strict";

//selecting elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const sectionPlayer0 = document.querySelector(".player--active");
const sectionPlayer1 = document.querySelector(".player--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

//hide dice at the beginning
diceEl.classList.add("hidden");

//initialize score
let score = 0;

//Rolling dice
rollDiceBtn.addEventListener("click", function () {
  //generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice element
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  //check for rolled 1: if true, switch to next player
  if (dice === 1) {
    score = 0;
    if (sectionPlayer0.classList.contains("player--active")) {
      sectionPlayer0.classList.remove("player--active");
      sectionPlayer1.classList.add("player--active");
      currentScore0.textContent = score;
    } else {
      sectionPlayer0.classList.add("player--active");
      sectionPlayer1.classList.remove("player--active");
      currentScore1.textContent = score;
    }
  } else {
    score += dice;
    if (sectionPlayer0.classList.contains("player--active")) {
      currentScore0.textContent = score;
    } else {
      currentScore1.textContent = score;
    }
  }
});
