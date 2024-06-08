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

// CONSECUTIVE WIN AUDIO

let consecutiveWinsAudio = document.getElementById("consecutiveWinsAudio");

// STAKE WIN AUDIO

let stakedAudio = document.getElementById("stakedAudio");

// STAKE LOSS AUDIO

let errorAudio = document.getElementById("errorAudio");

consecutiveWinsAudio.pause();
stakedAudio.pause();
errorAudio.pause();

// CONFETTI FUNCTIONALITY

document.querySelectorAll(".confettiButton").forEach((eBtn) => {
  eBtn.addEventListener("click", function () {
    // Trigger confetti explosion
    let shouldCelebrate = true;
  });
});

document.getElementById("highStake").classList.remove("beat-text");

let bronzeCoin = localStorage.getItem("bronzeCoin") || 0;
document.getElementById("bronzeCoin").textContent = bronzeCoin;

document.getElementById("bronzeCoinBtn").disabled = true;
document.getElementById("bronzeCoinBtn").style.opacity = "70%";

let highStakeText = 0;
document.querySelector(".highStakeText").textContent = highStakeText;
highStake.disabled = true;
highStake.style.opacity = "60%";

function stakingUpdate() {
  if (coinPoints > 10 && !stakedCoin && !stakeClick) {
    highStakeText = 1;
    document.querySelector(".highStakeText").textContent = highStakeText;
    document.getElementById("highStake").classList.add("beat-text");
  }

  if (coinPoints <= 10 || highStakeText === 0) {
    highStake.disabled = true;
    highStake.style.opacity = "60%";
  } else {
    highStake.disabled = false;

    highStake.style.opacity = "100%";
  }
}

stakingUpdate();

function winning(increment) {
  coinPoints += increment;

  //LOSING THE GAME
  if (coinPoints < 1) {
    coinPoints = 0;
    points.textContent = coinPoints;
    document.getElementById("gameOver").style.display = "block";

    document.getElementById("gameOver").textContent = "YOU LOST, GAME OVER!";
    losses++;
    lossText.textContent = losses;

    errorAudio.pause();

    // stakingUpdate();

    document.body.style.backgroundColor = "#FF0000";
    let overAudio = document.getElementById("overAudio");
    overAudio.play();

    playAgainBtn.textContent = "Start Over";

    document.getElementById("coin").disabled = true;
    document.getElementById("coin").style.opacity = "70%";
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;
    document.getElementById("bronzeCoinBtn").disabled = true;
    document.getElementById("bronzeCoinBtn").style.opacity = "70%";

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

  // WINING THE GAME
  if (coinPoints >= 40) {
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("coin").textContent = coinFace;

    document.getElementById("gameOver").textContent = "YOU WON THE GAME!";
    document.querySelector(".bronzeWin").textContent =
      " YOU HAVE GOT 1 BRONZE COIN";

    confetti();

    document.body.style.backgroundColor = "#60b347";

    let victoryAudio = document.getElementById("victoryAudio");
    victoryAudio.play();

    playAgainBtn.textContent = "Start Over";

    document.getElementById("coin").disabled = true;
    document.getElementById("coin").style.opacity = "70%";
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;
    document.getElementById("bronzeCoinBtn").disabled = true;
    document.getElementById("bronzeCoinBtn").style.opacity = "70%";

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

  //  winning();
}

// HIGHSTAKE BUTTON FUNCTIONALITY
document.getElementById("highStake").addEventListener("click", function () {
  stakedCoin = false;
  stakeClick = true;
  // winning(-10);
  // points.textContent = coinPoints;
  // console.log(coinPoints);

  if (highStakeText === 1) {
    highStake.disabled = true;
    highStake.style.opacity = "60%";
    document.getElementById("highStake").classList.remove("beat-text");
  }
  // stakeFn();
  if (coinPoints > 10 && !stakedCoin && highStakeText >= 1) {
    document.getElementById("snackbar").style.display = "flex";
    setTimeout(function () {
      document.getElementById("snackbar").style.display = "none";
    }, 1000);

    let stake = 10;
    winning(-stake);
    points.textContent = coinPoints;

    highStakeText = 0;
    document.querySelector(".highStakeText").textContent = highStakeText;
    document.getElementById("highStake").classList.remove("beat-text");
  }

  stakedCoin = false;
});

function bronzeIncreement() {
  if (coinPoints >= 40) {
    wins++;
    winText.textContent = wins;

    bronzeCoin++;
    document.getElementById("bronzeCoin").textContent = bronzeCoin;

    localStorage.setItem("bronzeCoin", bronzeCoin);
    document.getElementById("coin").textContent = coinFace;
  }
  if (bronzeCoin >= 1) {
    document.querySelector(".bronzeCoinColor").classList.add("flipping");
  }
}

bronzeIncreement();

// winning();

document.getElementById("snackbarText").textContent = "10 coins staked!";

document
  .getElementById("bronzeCoinText")
  .addEventListener("click", function () {
    if (bronzeCoin >= 1) {
      winning(10);
      points.textContent = coinPoints;
      introText.textContent = "+10";
      introText.style.opacity = "100%";
      introText.classList.add("animate-up");

      setTimeout(function () {
        introText.style.opacity = "0%";
        introText.classList.remove("animate-up");
      }, 1000);
      bronzeCoin--;
      document.getElementById("bronzeCoin").textContent = bronzeCoin;

      localStorage.setItem("bronzeCoin", bronzeCoin);

      bronzeIncreement();
      stakingUpdate();
    }
    if (bronzeCoin < 1) {
      document.querySelector(".bronzeCoinColor").classList.remove("flipping");
    }
  });

let consecutiveWins = 0;
document.querySelector(".consecutiveWinsText").textContent = consecutiveWins;

// play game button
let playAgainBtn = document.getElementById("playAgain");

const endGame = document.getElementById("endGame");

document.getElementById("coin").disabled = true;
document.getElementById("coin").style.opacity = "70%";

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
  document.getElementById("highStake").classList.remove("beat-text");

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

const introText = document.getElementById("introText");

// HEAD/TAIL BUTTON FUNCTIONALITY
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    buttonValue = button.textContent;
    document.getElementById("coin").textContent = coinFace;

    document.getElementById("highStake").classList.remove("beat-text");

    // STAKING 10 COINS
    if (
      buttonValue === coinFace &&
      !stakedCoin &&
      stakeClick &&
      coinPoints < 40
    ) {
      winning(25 - 2);
      points.textContent = coinPoints;

      introText.textContent = "+25";
      introText.style.opacity = "100%";
      introText.classList.add("animate-up");

      setTimeout(function () {
        introText.style.opacity = "0%";
        introText.classList.remove("animate-up");
      }, 1000);

      stakedCoin = true;
      document.getElementById("highStake").classList.remove("beat-text");

      //  winning();
      document.getElementById("snackbar").style.display = "flex";
      document.getElementById("snackbarText").textContent =
        "You have earned 25 coins!";
      setTimeout(function () {
        document.getElementById("snackbar").style.display = "none";
      }, 1200);

      stakedAudio.play();
    } else if (buttonValue !== coinFace && !stakedCoin && stakeClick) {
      winning(2);
      points.textContent = coinPoints;

      document.getElementById("highStake").classList.remove("beat-text");

      stakedCoin = true;
      document.getElementById("snackbar").style.display = "flex";
      document.getElementById("snackbarText").textContent =
        "You lost the stake";
      setTimeout(function () {
        document.getElementById("snackbar").style.display = "none";
      }, 1100);

      errorAudio.play();
    }

    // ADDING COIN POINTS
    if (buttonValue === coinFace && coinPoints >= 1) {
      winning(2);
      consecutiveWins++;
      points.textContent = coinPoints;

      button.style.backgroundColor = "green";
      button.style.color = "white";
      setTimeout(function () {
        button.style.backgroundColor = "";
        button.style.color = "black";
      }, 700);

      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
    } else if (buttonValue !== coinFace && coinPoints >= 1) {
      // DEDUCT COIN POINTS
      winning(-2);
      points.textContent = coinPoints;

      button.style.backgroundColor = "red";
      button.style.color = "white";
      setTimeout(function () {
        button.style.backgroundColor = "";
        button.style.color = "black";
      }, 700);

      consecutiveWins = 0;
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;
    }

    // stakedCoin = false;

    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;

    document.querySelectorAll(".btn").forEach((e) => {
      e.style.opacity = "60%";
    });

    document.getElementById("coin").textContent = coinFace;

    //CONSECUTIVE WINS
    if (consecutiveWins === 3) {
      winning(5);
      points.textContent = coinPoints;
      introText.textContent = "+5";
      introText.style.opacity = "100%";
      introText.classList.add("animate-up");

      setTimeout(function () {
        introText.style.opacity = "0%";
        introText.classList.remove("animate-up");
      }, 1000);

      consecutiveWins = 0;
      document.querySelector(".consecutiveWinsText").textContent =
        consecutiveWins;

      consecutiveWinsAudio.play();
    }

    if (coinPoints < 40 || coinPoints === 0) {
      document.getElementById("coin").textContent = coinFace;
      setTimeout(function () {
        document.getElementById("coin").textContent = "?";
      }, 600);
    }

    // highStakeText = 0;
    // document.querySelector(".highStakeText").textContent = highStakeText;

    bronzeIncreement();

    stakingUpdate();
  });
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
    introText.style.opacity = "0%";
    coinFace = Math.random();

    if (coinFace < 0.5) {
      coinFace = "Head";
    } else {
      coinFace = "Tail";
    }
    // console.log(coinFace);

    setTimeout(function () {
      document.getElementById("coin").style.animation = "none";
    }, 500); // Stop animation after 10 seconds
  }
});

// END GAME BUTTON FUNCTIONALITY
function resetGame() {
  endGame.addEventListener("click", function () {
    // if (document.getElementById("highStake").classList.add("beat-text")) {
    //   document.getElementById("highStake").classList.remove("beat-text");
    // }
    document.getElementById("highStake").classList.remove("beat-text");
    gamePlay = false;
    stakedCoin = false;
    stakeClick = false;
    document.getElementById("coin").disabled = true;
    document.getElementById("head").disabled = true;
    document.getElementById("tail").disabled = true;
    document.getElementById("endGame").disabled = true;
    endGame.style.opacity = "60%";
    document.getElementById("coin").style.opacity = "70%";

    document.querySelectorAll(".btn").forEach((e) => {
      e.style.opacity = "60%";
    });
    playAgainBtn.disabled = false;
    playAgainBtn.style.backgroundColor = "white";
    playAgainBtn.style.opacity = "100%";

    document.getElementById("bronzeCoinBtn").disabled = true;
    document.getElementById("bronzeCoinBtn").style.opacity = "70%";

    // stakingUpdate();

    if (coinPoints <= 10 || highStakeText === 0) {
      highStake.disabled = true;
      highStake.style.opacity = "60%";
    } else {
      highStake.disabled = false;

      highStake.style.opacity = "100%";
    }

    document.getElementById("snackbar").style.display = "none";
    document.getElementById("snackbarText").textContent = "10 coins staked!";
    setTimeout(function () {
      document.getElementById("snackbar").style.display = "none";
    }, 1300);

    document.querySelector(".bronzeWin").textContent = "";

    playAgainBtn.textContent = "Start Over";

    coinFace = null;

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
