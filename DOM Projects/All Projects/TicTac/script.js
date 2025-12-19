let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");

let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  let winnerFound = false;

  for (let pattern of patterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      disableAllBoxes();
      winnerFound = true;
      return;
    }
  }

  if (!winnerFound) {
    let allFilled = true;

    boxes.forEach((box) => {
      if (box.innerText === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      showDraw();
    }
  }
};

function showWinner(winner) {
  msg.innerText = `Winner is ${winner}!`;
  msg.style.color = "green";
}

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

function disableAllBoxes() {
  boxes.forEach((box) => (box.disabled = true));
}

resbtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });

  msg.innerText = "";
  turnO = true;
});

function showDraw() {
  msg.innerText = "Match Draw!";
  msg.style.color = "orange";
  disableAllBoxes();
}
