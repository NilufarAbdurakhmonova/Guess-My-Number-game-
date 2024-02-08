"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "correct number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 1;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 30) + 1;

let score = 30;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number!";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "correct number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;

      document.querySelector(".message").textContent = "you lost the game!";
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;

      document.querySelector(".message").textContent = "you lost the game!";
    }
  }
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  // window.location.reload();
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#494343";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
