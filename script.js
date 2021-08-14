function computerPlay() {
  let play = Math.floor(Math.random() * 3);

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
  switch (playerSelection.toLowerCase().trim()) {
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

function playRound(playerSelection) {
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
  round += 1;
  console.log("clicked");
  console.log(round);
  console.log(maxRounds);
  if (round === maxRounds) {
    console.log("something");
  }
}

let wins = 0,
  draws = 0,
  loses = 0,
  round = 0,
  maxRounds = 5; // default number of rounds played

/*
function game() {
  let wins = 0,
    draws = 0,
    loses = 0,
    rounds = 5; // default number of rounds played

  for (let i = 0; i < rounds; i++) {
    result = roundResult(prompt(), computerPlay());
    switch (result) {
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
    console.log(result);
  }
  console.log(`Wins: ${wins}`);
  console.log(`Draws: ${draws}`);
  console.log(`Loses: ${loses}`);
}
*/
//game();

//console.log(playRound(prompt(), computerPlay()));

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
