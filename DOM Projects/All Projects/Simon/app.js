let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "purple", "green", "red"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`#${randColor}`);

  gameSeq.push(randColor);
  console.log("Game sequence:", gameSeq);

  btnFlash(randBtn);
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game Over! Press any key to restart.`;
    resetGame();
  }
}

function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
