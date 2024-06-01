"use-strict";

document.getElementById("gameOver").style.display = "none";

const head = document.getElementById("head").textContent;
const tail = document.getElementById("tail").textContent;
const points = document.querySelector(".points");

let stakeClick = false;

//document.getElementById("highStake").style.display = "none";

let wins = 0;
let losses = 0;

const winText = document.querySelector(".wins");
winText.textContent = wins;

const lossText = document.querySelector(".losses");
lossText.textContent = losses;

let coinFace;
console.log(coinFace);
let buttonValue;

let coinPoints = 5;

let stakedCoin = false;

document.querySelectorAll(".confettiButton").forEach((eBtn) => {
  eBtn.addEventListener("click", function () {
    // Trigger confetti explosion
    let shouldCelebrate = true;
  });
});

document.getElementById("bronzeCoinBtn").disabled = true;
document.getElementById("bronzeCoinBtn").style.opacity = "80%";

let highStakeText = 0;
document.querySelector(".highStakeText").textContent = highStakeText;
highStake.disabled = true;
highStake.style.opacity = "60%";

function stakingUpdate() {
  if (coinPoints >= 10 && !stakedCoin && !stakeClick) {
    highStakeText = 1;
    document.querySelector(".highStakeText").textContent = highStakeText;
  }

  if (coinPoints < 10 || highStakeText === 0) {
    highStake.disabled = true;
    highStake.style.opacity = "60%";
  } else {
    highStake.disabled = false;

    highStake.style.opacity = "100%";
  }
}

stakingUpdate();

function winning() {
  if (coinPoints >= 40) {
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("coin").textContent = coinFace;

    document.getElementById("gameOver").textContent = "YOU WON THE GAME!";
    document.querySelector(".bronzeWin").textContent =
      " YOU HAVE GOT 1 BRONZE COIN";
    wins++;
    winText.textContent = wins;

    confetti();

    consecutiveWinsAudio.pause();
    stakedAudio.pause();
    document.body.style.backgroundColor = "#60b347";
    let victoryAudio = document.getElementById("victoryAudio");
    victoryAudio.play();

    playAgainBtn.textContent = "Start Over";

    bronzeCoin++;
    document.getElementById("bronzeCoin").textContent = bronzeCoin;

    localStorage.setItem("bronzeCoin", JSON.stringify(bronzeCoin));

    document.getElementById("coin").disabled = true;
    document.getElementById("coin").style.opacity = "80%";
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;

    document.querySelectorAll(".btn").forEach((e) => {
      e.style.opacity = "60%";
    });

    gamePlay = false;
    playAgainBtn.disabled = false;
    playAgainBtn.style.backgroundColor = "white";
    playAgainBtn.style.opacity = "100%";
    endGame.disabled = true;
    endGame.style.opacity = "60%";
    stakingUpdate();
  }
}

winning();

document.getElementById("snackbarText").textContent = "10 coins staked!";

let bronzeCoin = JSON.parse(localStorage.getItem("bronzeCoin")) || 0;
document.getElementById("bronzeCoin").textContent = bronzeCoin;

document
  .getElementById("bronzeCoinText")
  .addEventListener("click", function () {
    if (bronzeCoin >= 1) {
      coinPoints += 10;
      points.textContent = coinPoints;
      bronzeCoin--;
      document.getElementById("bronzeCoin").textContent = bronzeCoin;

      localStorage.setItem("bronzeCoin", JSON.stringify(bronzeCoin));

      console.log("bronze clicked");

      stakingUpdate();

      winning();
    } else {
      console.log("bronze not clicked");
    }
  });

let consecutiveWins = 0;
document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

// play game button
let playAgainBtn = document.getElementById("playAgain");

const endGame = document.getElementById("endGame");

document.getElementById("coin").disabled = true;
document.getElementById("coin").style.opacity = "80%";

document.getElementById("head").disabled = true;

document.querySelectorAll(".btn").forEach((e) => {
  e.style.opacity = "60%";
});
document.getElementById("tail").disabled = true;
endGame.disabled = true;

endGame.style.opacity = "60%";

// START GAME
playAgainBtn.addEventListener("click", function () {
  gamePlay = true;
  stakedCoin = false;
  stakeClick = false;
  document.getElementById("coin").disabled = false;
  document.getElementById("coin").style.opacity = "100%";

  stakingUpdate();

  highStake.disabled = true;
  highStake.style.opacity = "60%";

  document.getElementById("bronzeCoinBtn").disabled = false;
  document.getElementById("bronzeCoinBtn").style.opacity = "100%";

  document.getElementById("snackbar").style.display = "none";
  document.getElementById("snackbarText").textContent = "10 coins staked!";
  setTimeout(function () {
    document.getElementById("snackbar").style.display = "none";
  }, 1300);

  document.querySelector(".bronzeWin").textContent = "";

  document.getElementById("highStake").disabled = false;
  document.body.style.backgroundColor = "black";
  endGame.disabled = false;
  endGame.style.backgroundColor = "white";
  endGame.style.opacity = "100%";

  playAgainBtn.textContent = "Playing";

  playAgainBtn.disabled = true;
  playAgainBtn.style.opacity = "60%";

  coinPoints = 5;
  points.textContent = coinPoints;
  consecutiveWins = 0;
  document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

  highStakeText = 0;
  document.querySelector(".highStakeText").textContent = highStakeText;

  document.getElementById("coin").textContent = "?";

  document.getElementById("gameOver").style.display = "none";
});

// HEAD/TAIL BUTTON FUNCTIONALITY
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    // stakedCoin = false;

    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;

    document.querySelectorAll(".btn").forEach((e) => {
      e.style.opacity = "60%";
    });

    winning();
    document.getElementById("coin").textContent = coinFace;

    if (coinPoints < 40 && coinPoints === 0) {
      setTimeout(function () {
        document.getElementById("coin").textContent = "?";
      }, 800);
    }

    buttonValue = button.textContent;
    if (buttonValue === coinFace && coinPoints >= 1) {
      coinPoints += 2;
      consecutiveWins++;
      points.textContent = coinPoints;

      winning();
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
    } else if (coinPoints >= 1) {
      coinPoints -= 2;
      points.textContent = coinPoints;
      consecutiveWins = 0;
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
    }

    if (consecutiveWins === 3) {
      coinPoints += 7 - 2;
      points.textContent = coinPoints;

      winning();
      consecutiveWins = 0;
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;

      let consecutiveWinsAudio = document.getElementById(
        "consecutiveWinsAudio"
      );
      consecutiveWinsAudio.play();
    }

    stakingUpdate();

    // if (coinPoints >= 10 && !stakedCoin && !stakeClick) {
    //   highStakeText = 1;
    //   document.querySelector(".highStakeText").textContent = highStakeText;
    // }

    if (coinPoints < 1) {
      coinPoints = 0;
      points.textContent = coinPoints;
      document.getElementById("gameOver").style.display = "block";
      document.getElementById("coin").textContent = coinFace;

      document.getElementById("gameOver").textContent = "YOU LOST, GAME OVER!";
      losses++;
      lossText.textContent = losses;

      stakingUpdate();

      document.body.style.backgroundColor = "#FF0000";
      let overAudio = document.getElementById("overAudio");
      overAudio.play();

      playAgainBtn.textContent = "Start Over";

      document.getElementById("coin").style.opacity = "80%";

      document.getElementById("coin").disabled = true;
      document.getElementById("head").disabled = true;
      document.getElementById("tail").disabled = true;

      document.querySelectorAll(".btn").forEach((e) => {
        e.style.opacity = "60%";
      });

      gamePlay = false;
      playAgainBtn.disabled = false;
      playAgainBtn.style.backgroundColor = "white";
      playAgainBtn.style.opacity = "100%";
      endGame.disabled = true;
      endGame.style.opacity = "60%";
    }

    // if (coinPoints >= 40) {
    //   document.getElementById("gameOver").style.display = "block";
    //   document.getElementById("coin").textContent = coinFace;

    //   document.getElementById("gameOver").textContent = "YOU WON THE GAME!";
    //   document.querySelector(".bronzeWin").textContent =
    //     " YOU HAVE GOT 1 BRONZE COIN";
    //   wins++;
    //   winText.textContent = wins;

    //   document.body.style.backgroundColor = "#60b347";
    //   let victoryAudio = document.getElementById("victoryAudio");
    //   victoryAudio.play();

    //   playAgainBtn.textContent = "Start Over";

    //   bronzeCoin++;
    //   document.getElementById("bronzeCoin").textContent = bronzeCoin;

    //   localStorage.setItem("bronzeCoin", JSON.stringify(bronzeCoin));

    //   document.getElementById("coin").disabled = true;
    //   document.getElementById("coin").style.opacity = "80%";
    //   document.getElementById("head").disabled = true;
    //   document.getElementById("tail").disabled = true;

    //   document.querySelectorAll(".btn").forEach((e) => {
    //     e.style.opacity = "60%";
    //   });

    //   gamePlay = false;
    //   playAgainBtn.disabled = false;
    //   playAgainBtn.style.backgroundColor = "white";
    //   playAgainBtn.style.opacity = "100%";
    //   endGame.disabled = true;
    //   endGame.style.opacity = "60%";
    // }
  });
});

// HIGHSTAKE BUTTON FUNCTIONALITY
document.getElementById("highStake").addEventListener("click", function () {
  stakedCoin = false;
  stakeClick = true;

  if (highStakeText === 1) {
    highStake.disabled = true;
    highStake.style.opacity = "60%";
  }
  // stakeFn();
  if (coinPoints >= 10 && !stakedCoin && highStakeText >= 1) {
    document.getElementById("snackbar").style.display = "flex";
    setTimeout(function () {
      document.getElementById("snackbar").style.display = "none";
    }, 1000);

    let stake = 10;
    coinPoints -= stake;
    points.textContent = coinPoints;
    console.log("staked");

    highStakeText = 0;
    document.querySelector(".highStakeText").textContent = highStakeText;
  }

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function () {
      if (buttonValue === coinFace && !stakedCoin && stakeClick) {
        coinPoints += 25 - 2;
        points.textContent = coinPoints;

        stakedCoin = true;

        winning();
        document.getElementById("snackbar").style.display = "flex";
        document.getElementById("snackbarText").textContent =
          "You have earned 25 coins!";
        setTimeout(function () {
          document.getElementById("snackbar").style.display = "none";
        }, 1100);

        let stakedAudio = document.getElementById("stakedAudio");
        stakedAudio.play();
      } else if (
        buttonValue !== coinFace &&
        !stakedCoin &&
        coinPoints >= 1 &&
        stakeClick
      ) {
        coinPoints += 2;
        points.textContent = coinPoints;

        stakedCoin = true;
        document.getElementById("snackbar").style.display = "flex";
        document.getElementById("snackbarText").textContent =
          "You lost the stake";
        setTimeout(function () {
          document.getElementById("snackbar").style.display = "none";
        }, 1100);

        let errorAudio = document.getElementById("errorAudio");
        errorAudio.play();
      }

      // highStakeText = 0;
      // document.querySelector(".highStakeText").textContent = highStakeText;
    });
  });

  stakedCoin = false;
});

// COIN FLIP CLICK

document.getElementById("coin").addEventListener("click", function () {
  // let flippingAudio = document.getElementById("flippingAudio");
  // flippingAudio.play();

  document.getElementById("head").disabled = false;
  document.getElementById("tail").disabled = false;

  document.querySelectorAll(".btn").forEach((e) => {
    e.style.backgroundColor = "white";
    e.style.opacity = "100%";
  });
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
    }, 500); // Stop animation after 10 seconds
  }
});

// END GAME BUTTON FUNCTIONALITY
function resetGame() {
  endGame.addEventListener("click", function () {
    gamePlay = false;
    stakedCoin = false;
    stakeClick = false;
    document.getElementById("coin").disabled = true;
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;
    document.getElementById("endGame").disabled = true;
    endGame.style.opacity = "60%";
    document.getElementById("coin").style.opacity = "80%";

    document.querySelectorAll(".btn").forEach((e) => {
      e.style.opacity = "60%";
    });
    playAgainBtn.disabled = false;
    playAgainBtn.style.backgroundColor = "white";
    playAgainBtn.style.opacity = "100%";

    document.getElementById("bronzeCoinBtn").disabled = true;
    document.getElementById("bronzeCoinBtn").style.opacity = "80%";

    stakingUpdate();

    document.getElementById("snackbar").style.display = "none";
    document.getElementById("snackbarText").textContent = "10 coins staked!";
    setTimeout(function () {
      document.getElementById("snackbar").style.display = "none";
    }, 1300);

    document.querySelector(".bronzeWin").textContent = "";

    playAgainBtn.textContent = "Start Over";

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
