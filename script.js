let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw.");
  msg.innerText = "Game was Draw Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore; //user score update
    console.log("You win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore; // computer score update
    console.log("You Lose!");
    msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // console.log("user choice =", userChoice);
  const computerChoice = genCompChoice();
  // console.log("computer choice = " + computerChoice);
  if (userChoice === computerChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      //paper,rock
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // working on click
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
