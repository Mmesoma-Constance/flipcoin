// document.querySelectorAll(".btn").forEach((button) => {
//   button.addEventListener("click", function () {
//     stakedCoin = true;
//     let buttonValue = button.textContent;
//     if (buttonValue === coinFace) {
//       coinPoints += 30;
//       points.textContent = coinPoints;
//       console.log(buttonValue);
//       console.log(coinFace);
//       console.log(coinPoints);
//     }
//   });
// });

////////////////////

// document.getElementById("head").addEventListener("click", function () {
//   document.getElementById("coin").textContent = coinFace;

//   if (
//     coinFace === "Head" &&
//     coinPoints >= 1 &&
//     coinPoints < 10 &&
//     !stakedCoin
//   ) {
//     coinPoints += 2;
//     points.innerHTML = coinPoints;
//     // console.log(coinFace);
//   } else if (coinPoints >= 1) {
//     console.log("the coin is tail, you lose");
//     coinPoints -= 2;
//     points.textContent = coinPoints;
//   }

//   if (coinPoints < 1) {
//     document.getElementById("head").disabled = true;

//     coinPoints = 0;
//     points.textContent = coinPoints;
//     alert("YOU LOST! GAME OVER!");
//   }

// });

// document.getElementById("tail").addEventListener("click", function () {
//   document.getElementById("coin").textContent = coinFace;
//   if (
//     coinFace === "Tail" &&
//     coinPoints >= 1 &&
//     coinPoints < 10 &&
//     !stakedCoin
//   ) {
//     // console.log("the coin is Tail, you win");
//     coinPoints += 2;
//     points.textContent = coinPoints;
//   } else if (coinPoints >= 1) {
//     // console.log("the coin is head, you lose");
//     coinPoints -= 2;
//     points.textContent = coinPoints;
//   }

//   if (coinPoints < 2) {
//     document.getElementById("tail").disabled = true;

//     coinPoints = 0;
//     alert("YOU LOST! GAME OVER!");
//   }
// });

const stakeValue = function () {
  document.getElementById("highStake").addEventListener("click", function () {
    let stake = 10;
    coinPoints -= stake;
    points.textContent = coinPoints;
    console.log("staked");
  });
};

stakeValue();

if (coinPoints >= 10 && !stakedCoin) {
  stakeValue();

  if (buttonValue === coinFace) {
    coinPoints += 25 - 2;
    console.log(` this is ${buttonValue}`);
    console.log(` this is ${coinFace}`);
  }

  stakedCoin = true;
  highStakeText = 0;
  document.querySelector(".highStakeText").textContent = highStakeText;
}

///////////////////

("use-strict");

document.getElementById("gameOver").style.display = "none";

const head = document.getElementById("head").textContent;
const tail = document.getElementById("tail").textContent;
const points = document.querySelector(".points");

//document.getElementById("highStake").style.display = "none";

///////////////

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

document.getElementById("coin").disabled = true;
playAgainBtn.addEventListener("click", function () {
  gamePlay = true;
  document.getElementById("coin").disabled = false;
  // document.getElementById("head").disabled = false;
  // document.getElementById("tail").disabled = false;
  playAgainBtn.disabled = true;
});

// COIN FLIP CLICK
// document.getElementById("gameOver").style.display = "none";

document.getElementById("coin").addEventListener("click", function () {
  if (coinPoints >= 1) {
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
  }
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
