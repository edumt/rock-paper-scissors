function computerPlay() {
  let play = Math.floor(Math.random() * 3);

  switch (play) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      // handles Math.random() === 1
      return computerPlay();
  }
}

function playRound(playerSelection, computerSelection) {
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
