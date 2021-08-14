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
    rock_img.src = "img/the-rock.jpg";
    rock_title.innerText = "The Rock!";
  } else if (rock_title.innerText === "The Rock!") {
    rock_img.src = "img/rock.svg";
    rock_title.innerText = "Rock";
  }
}

function playRound(playerSelection) {
  if (roundsPlayed < maxRounds) {
    switch (roundResult(playerSelection, computerPlay())) {
      case "win":
        wins += 1;
        break;
      case "draw":
        draws += 1;
        break;
      case "lose":
        loses += 1;
        break;
    }
    roundsPlayed += 1;
    updateStats();
  }
  easterEgg();

  if (roundsPlayed === maxRounds) {
    if (wins > loses) {
      console.log("something");
    }
  }
}

let wins = 0,
  draws = 0,
  loses = 0,
  roundsPlayed = 0,
  maxRounds = 5; // default number of rounds played

let winsStat = document.getElementById("wins");
let drawsStat = document.getElementById("draws");
let losesStat = document.getElementById("loses");
let roundsStat = document.getElementById("rounds");
let rock_img = document.getElementById("rock-img");
let rock_title = document.getElementById("rock-title");
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
