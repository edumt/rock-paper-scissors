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
function playRound(playerSelection, computerSelection) {}
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
