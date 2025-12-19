// Select elements
const playerNameInput = document.getElementById("playerName");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");

const increaseBtn = document.getElementById("increaseScore");
const nextLevelBtn = document.getElementById("nextLevel");
const saveBtn = document.getElementById("saveGame");
const resetBtn = document.getElementById("resetGame");

let gameData = {
  playerName: "",
  score: 0,
  level: 1,
};

const savedData = JSON.parse(localStorage.getItem("gameData"));
if (savedData) {
  gameData = savedData;
  playerNameInput.value = gameData.playerName;
  scoreDisplay.textContent = gameData.score;
  levelDisplay.textContent = gameData.level;
}

increaseBtn.addEventListener("click", () => {
  gameData.score += 10;
  scoreDisplay.textContent = gameData.score;
});

nextLevelBtn.addEventListener("click", () => {
  gameData.level++;
  levelDisplay.textContent = gameData.level;
});

saveBtn.addEventListener("click", () => {
  gameData.playerName = playerNameInput.value.trim();
  localStorage.setItem("gameData", JSON.stringify(gameData));
  alert("Game Saved!");
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("gameData");
  gameData = { playerName: "", score: 0, level: 1 };

  playerNameInput.value = "";
  scoreDisplay.textContent = 0;
  levelDisplay.textContent = 1;

  alert("Game Reset!");
});
