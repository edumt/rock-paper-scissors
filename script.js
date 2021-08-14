function random(numberOfIntegers) {
  return Math.floor(Math.random() * numberOfIntegers);
}

function computerPlay() {
  let play = random(3);

  switch (play) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function roundResult(playerSelection, computerSelection) {
  // returns if player 'win', 'lose' or 'draw' the round
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "draw";
        case "paper":
          return "lose";
        case "scissors":
          return "win";
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "win";
        case "paper":
          return "draw";
        case "scissors":
          return "lose";
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "lose";
        case "paper":
          return "win";
        case "scissors":
          return "draw";
      }
  }
}

function updateStats() {
  winsStat.innerHTML = `Wins: ${wins}`;
  drawsStat.innerHTML = `Draws: ${draws}`;
  losesStat.innerHTML = `Loses: ${loses}`;
  roundsStat.innerHTML = `Rounds played: ${roundsPlayed}`;
}

function easterEgg() {
  // 10% chance to proc
  if (random(10) === 7) {
    rockImg.src = "img/the-rock.jpg";
    rockTitle.innerText = "The Rock!";
  } else if (rockTitle.innerText === "The Rock!") {
    rockImg.src = "img/rock.svg";
    rockTitle.innerText = "Rock";
  }
}

function playFeedbackStep(text) {
  playArea.innerText = text;
}

function playFeedback(text) {
  playFeedbackStep("Playing");
  setTimeout(function () {
    playFeedbackStep("Playing.");
  }, 200);
  setTimeout(function () {
    playFeedbackStep("Playing..");
  }, 400);
  setTimeout(function () {
    playFeedbackStep("Playing...");
  }, 600);
  setTimeout(function () {
    playFeedbackStep(text);
  }, 800);
}

function playRound(playerSelection) {
  if (roundsPlayed < maxRounds) {
    let result = roundResult(playerSelection, computerPlay());
    switch (result) {
      case "win":
        playFeedback("Yay! You won this round!");
        wins += 1;
        break;
      case "draw":
        playFeedback("It's a draw!");
        draws += 1;
        break;
      case "lose":
        playFeedback("Oh no! You lost this round!");
        loses += 1;
        break;
    }
    roundsPlayed += 1;
    setTimeout(function () {
      updateStats();
    }, 800);
  }
  easterEgg();

  if (roundsPlayed === maxRounds) {
    //todo: change those texts to something better
    if (wins > loses) {
      setTimeout(function () {
        playFeedbackStep(`You won the best of ${maxRounds} match!`);
      }, 800);
    } else if (wins < loses) {
      setTimeout(function () {
        playFeedbackStep(`You lost the best of ${maxRounds} match!`);
      }, 800);
    } else {
      setTimeout(function () {
        playFeedbackStep(`The best of ${maxRounds} match tied!`);
      }, 800);
    }
  }
}

let wins = 0,
  draws = 0,
  loses = 0,
  roundsPlayed = 0,
  maxRounds = 7;

document.getElementById("max-rounds").innerText = maxRounds;

let winsStat = document.getElementById("wins");
let drawsStat = document.getElementById("draws");
let losesStat = document.getElementById("loses");
let roundsStat = document.getElementById("rounds");
let rockImg = document.getElementById("rock-img");
let rockTitle = document.getElementById("rock-title");
let playArea = document.getElementById("play-area");
/*
function checkProbabilityDensity(iterations) {
  //Monte Carlo for checking probability density
  let rock = 0;
  let paper = 0;
  let scissors = 0;

  for (let i = 0; i < iterations; i++) {
    switch (computerPlay()) {
      case "rock":
        rock += 1;
        break;
      case "paper":
        paper += 1;
        break;
      case "scissors":
        scissors += 1;
        break;
    }
  }
  console.log(`Rock: ${(rock * 100) / iterations}%`);
  console.log(`Paper: ${(paper * 100) / iterations}%`);
  console.log(`Scissors: ${(scissors * 100) / iterations}%`);
}

checkProbabilityDensity(1e6);
*/
