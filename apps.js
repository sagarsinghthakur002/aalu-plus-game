let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBtn();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true; // ek chotii click vaya poxii feri tasma click na hoss vnae rw

    checkWinner();
  });
});

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBtn();
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let box1 = boxes[pattern[0]].innerHTML;
    let box2 = boxes[pattern[1]].innerHTML;
    let box3 = boxes[pattern[2]].innerHTML;

    if (box1 != "" && box2 != "" && box3 != "") {
      if (box1 === box2 && box2 === box3) {
        showWinner(box1);

        return;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
