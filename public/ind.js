"use-strict";

document.getElementById("gameOver").style.display = "none";

const head = document.getElementById("head").textContent;
const tail = document.getElementById("tail").textContent;
const points = document.querySelector(".points");

//document.getElementById("highStake").style.display = "none";

let coinFace;
console.log(coinFace);
let buttonValue;

let coinPoints = 5;
let stakedCoin = false;

let consecutiveWins = 0;
document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

let highStakeText = 0;
document.querySelector(".highStakeText").textContent = highStakeText;

// play game button
let playAgainBtn = document.getElementById("playAgain");

let gamePlay = false;

playAgainBtn.addEventListener("click", function () {
  gamePlay = true;
  document.getElementById("coin").disabled = false;
  document.getElementById("head").disabled = false;
  document.getElementById("tail").disabled = false;
  playAgainBtn.disabled = true;

  coinFace = "";
  console.log(coinFace);

  coinPoints = 5;
  points.textContent = coinPoints;
  consecutiveWins = 0;
  document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

  highStakeText = 0;
  document.querySelector(".highStakeText").textContent = highStakeText;

  document.getElementById("coin").textContent = "?";

  // COIN FLIP CLICK
  // document.getElementById("gameOver").style.display = "none";

  if (coinPoints >= 1) {
    document.getElementById("coin").addEventListener("click", function () {
      this.style.animation = "flip .2s ease-in-out infinite";
      document.getElementById("coin").textContent = "?";
      coinFace = Math.random();
      console.log(coinFace);
      if (coinFace < 0.5) {
        coinFace = "Head";
      } else {
        coinFace = "Tail";
      }

      setTimeout(function () {
        document.getElementById("coin").style.animation = "none";
      }, 1000); // Stop animation after 10 seconds
    });
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById("coin").textContent = coinFace;

      buttonValue = button.textContent;
      if (buttonValue === coinFace && coinPoints >= 1) {
        coinPoints += 2;
        consecutiveWins++;
        points.textContent = coinPoints;

        document.querySelector(".consecutiveWinsText").textContent =
          consecutiveWins;
        console.log(buttonValue);
        console.log(coinFace);
        console.log(coinPoints);
      } else if (coinPoints >= 1) {
        console.log("the coin is tail, you lose");
        coinPoints -= 2;
        points.textContent = coinPoints;
        consecutiveWins = 0;
        document.querySelector(".consecutiveWinsText").textContent =
          consecutiveWins;
      }

      if (consecutiveWins === 3) {
        coinPoints += 8 - 2;
        points.textContent = coinPoints;

        consecutiveWins = 0;
        document.querySelector(".consecutiveWinsText").textContent =
          consecutiveWins;
      }
      if (coinPoints >= 10 && !stakedCoin) {
        highStakeText = 1;
        document.querySelector(".highStakeText").textContent = highStakeText;
      }

      if (coinPoints < 1) {
        coinPoints = 0;
        points.textContent = coinPoints;
        document.getElementById("gameOver").style.display = "block";
        document.getElementById("gameOver").textContent = "YOU LOST GAME OVER!";

        playAgainBtn.textContent = "Start Over";

        document.getElementById("coin").disabled = true;
        document.getElementById("head").disabled = true;
        document.getElementById("tail").disabled = true;
      }

      if (coinPoints >= 50) {
        document.getElementById("gameOver").style.display = "block";
        document.getElementById("gameOver").textContent = "YOU WON THE GAME!";

        playAgainBtn.textContent = "Start Over";

        document.getElementById("coin").disabled = true;
        document.getElementById("head").disabled = true;
        document.getElementById("tail").disabled = true;
      }
    });
  });

  document.getElementById("highStake").addEventListener("click", function () {
    if (coinPoints >= 10 && !stakedCoin) {
      let stake = 10;
      coinPoints -= stake;
      points.textContent = coinPoints;
      console.log("staked");

      document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function () {
          buttonValue = button.textContent;
          if (buttonValue === coinFace && !stakedCoin) {
            coinPoints += 25 - 2;
            points.textContent = coinPoints;
            console.log(` this is ${buttonValue}`);
            console.log(` this is ${coinFace}`);
            console.log(` this is ${coinPoints}`);
          } else if (
            buttonValue !== coinFace &&
            !stakedCoin &&
            coinPoints >= 1
          ) {
            coinPoints += 2;
            points.textContent = coinPoints;
          }

          stakedCoin = true;
          highStakeText = 0;
          document.querySelector(".highStakeText").textContent = highStakeText;
        });
      });
    }
  });
});

const endGame = document.getElementById("endGame");

endGame.addEventListener("click", function () {
  gamePlay = false;
  document.getElementById("coin").disabled = true;
  document.getElementById("head").disabled = true;
  document.getElementById("tail").disabled = true;
  playAgainBtn.disabled = false;

  coinFace = null;
  console.log(coinFace);

  coinPoints = 5;
  points.textContent = coinPoints;
  consecutiveWins = 0;
  document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

  highStakeText = 0;
  document.querySelector(".highStakeText").textContent = highStakeText;

  document.getElementById("coin").textContent = "?";
});

// document.getElementById("startOver").addEventListener("click", function () {
//   playGame();
// });

///////

("use-strict");

document.getElementById("gameOver").style.display = "none";

const head = document.getElementById("head").textContent;
const tail = document.getElementById("tail").textContent;
const points = document.querySelector(".points");

//document.getElementById("highStake").style.display = "none";

let coinFace;
console.log(coinFace);
let buttonValue;

let coinPoints = 5;
let stakedCoin = false;

let consecutiveWins = 0;
document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

let highStakeText = 0;
document.querySelector(".highStakeText").textContent = highStakeText;

// play game button
let playAgainBtn = document.getElementById("playAgain");

const endGame = document.getElementById("endGame");

document.getElementById("coin").disabled = true;

document.getElementById("head").disabled = true;
document.getElementById("tail").disabled = true;
endGame.disabled = true;

playAgainBtn.addEventListener("click", function () {
  gamePlay = true;
  document.getElementById("coin").disabled = false;
  document.getElementById("head").disabled = false;
  document.getElementById("tail").disabled = false;
  endGame.disabled = false;

  playAgainBtn.disabled = true;
});

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("coin").textContent = coinFace;

    buttonValue = button.textContent;
    if (buttonValue === coinFace && coinPoints >= 1) {
      coinPoints += 2;
      consecutiveWins++;
      points.textContent = coinPoints;

      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
      console.log(buttonValue);
      console.log(coinFace);
      console.log(coinPoints);
    } else if (coinPoints >= 1) {
      console.log("the coin is tail, you lose");
      coinPoints -= 2;
      points.textContent = coinPoints;
      consecutiveWins = 0;
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
    }

    if (consecutiveWins === 3) {
      coinPoints += 8 - 2;
      points.textContent = coinPoints;

      consecutiveWins = 0;
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
    }
    if (coinPoints >= 10 && !stakedCoin) {
      highStakeText = 1;
      document.querySelector(".highStakeText").textContent = highStakeText;
    }

    if (coinPoints < 1) {
      coinPoints = 0;
      points.textContent = coinPoints;
      document.getElementById("gameOver").style.display = "block";
      document.getElementById("gameOver").textContent = "YOU LOST GAME OVER!";

      playAgainBtn.textContent = "Start Over";

      document.getElementById("coin").disabled = true;
      document.getElementById("head").disabled = true;
      document.getElementById("tail").disabled = true;
    }

    if (coinPoints >= 50) {
      document.getElementById("gameOver").style.display = "block";
      document.getElementById("gameOver").textContent = "YOU WON THE GAME!";

      playAgainBtn.textContent = "Start Over";

      document.getElementById("coin").disabled = true;
      document.getElementById("head").disabled = true;
      document.getElementById("tail").disabled = true;
    }
  });
});

document.getElementById("highStake").addEventListener("click", function () {
  if (coinPoints >= 10 && !stakedCoin) {
    let stake = 10;
    coinPoints -= stake;
    points.textContent = coinPoints;
    console.log("staked");

    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", function () {
        buttonValue = button.textContent;
        if (buttonValue === coinFace && !stakedCoin) {
          coinPoints += 25 - 2;
          points.textContent = coinPoints;
          console.log(` this is ${buttonValue}`);
          console.log(` this is ${coinFace}`);
          console.log(` this is ${coinPoints}`);
        } else if (buttonValue !== coinFace && !stakedCoin && coinPoints >= 1) {
          coinPoints += 2;
          points.textContent = coinPoints;
        }

        stakedCoin = true;
        highStakeText = 0;
        document.querySelector(".highStakeText").textContent = highStakeText;
      });
    });
  }
});

// COIN FLIP CLICK
// document.getElementById("gameOver").style.display = "none";

document.getElementById("coin").addEventListener("click", function () {
  if (coinPoints >= 1) {
    this.style.animation = "flip .2s ease-in-out infinite";

    document.getElementById("coin").textContent = "?";
    coinFace = Math.random();

    if (coinFace < 0.5) {
      coinFace = "Head";
    } else {
      coinFace = "Tail";
    }
    console.log(coinFace);
    setTimeout(function () {
      document.getElementById("coin").style.animation = "none";
    }, 1000); // Stop animation after 10 seconds
  }
});

function resetGame() {
  endGame.addEventListener("click", function () {
    gamePlay = false;
    document.getElementById("coin").disabled = true;
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;
    playAgainBtn.disabled = false;

    coinFace = null;
    console.log(coinFace);

    coinPoints = 5;
    points.textContent = coinPoints;
    consecutiveWins = 0;
    document.querySelector(".consecutiveWinsText").textContent =
      consecutiveWins;

    highStakeText = 0;
    document.querySelector(".highStakeText").textContent = highStakeText;

    document.getElementById("coin").textContent = "?";

    document.getElementById("gameOver").style.display = "none";
  });
}

resetGame();

// document.getElementById("startOver").addEventListener("click", function () {
//   playGame();
// });
