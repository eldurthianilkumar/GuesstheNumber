let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// document.querySelector(".number").textContent = randomNum;

const messageFun = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guessNO = Number(document.querySelector(".guess").value);

  if (!guessNO) {
    messageFun("No Input");
  } else if (guessNO == randomNum) {
    messageFun("Correct guess");
    document.querySelector(".number").textContent = randomNum;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guessNO > randomNum) {
    if (score > 1) {
      messageFun("Too much!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guessNO < randomNum) {
    if (score > 1) {
      messageFun("Too Low!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  let highScore = 0;
  let randomNum = Math.trunc(Math.random() * 20) + 1;
  messageFun("Start guessing");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".guess").value = " ";
});
