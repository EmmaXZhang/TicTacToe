// const
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// state varibles
const state = {
  currentClass: "x",
  circleClass: "circle",
  xClass: "x",
};

//cached elements
const elements = {
  cells: document.querySelectorAll(".cell"),
  winMsg: document.querySelector(".messageText"),
  message: document.querySelector(".message"),
  restartBtn: document.querySelector(".restart"),
  nextTurn: document.querySelector(".nextTurn"),
};

//event listener
elements.cells.forEach(function (cell) {
  cell.addEventListener("click", handleClick, { once: true }); //only can click one time
});

elements.restartBtn.addEventListener("click", restart);

//function
function handleClick(event) {
  //define clicked cell
  const cell = event.target;
  //add X or O class to place mark
  placeMark(cell, state.currentClass);

  //check wins
  if (checkWins(state.currentClass) === true) {
    elements.winMsg.innerText = `${state.currentClass} Wins`;
    elements.message.classList.add("msgShow");
  }

  //check draw
  else if (checkDraw() === true) {
    elements.winMsg.innerText = "Draw!";
    elements.message.classList.add("msgShow");
  }

  //switch player
  switchPlayer(state.currentClass);
  elements.nextTurn.innerText = `Next turn: ${state.currentClass}`;
}

//functions
//choose placeMark
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

//switch player
function switchPlayer(currentClass) {
  if (currentClass === "x") {
    state.currentClass = "circle";
  } else {
    state.currentClass = "x";
  }
}

//check winner -> return boolean value
function checkWins(currentClass) {
  return winningCombination.some(function checkClass(winCase) {
    return winCase.every((cellIndex) =>
      elements.cells[cellIndex].classList.contains(currentClass)
    );
  });
}

//check draw -> return boolean
function checkDraw() {
  return Array.from(elements.cells).every(
    (cell) => cell.classList.contains("x") || cell.classList.contains("circle")
  );
}

//restart function
function restart() {
  elements.message.classList.remove("msgShow");
  state.currentClass = "x";
  elements.winMsg.innerText = "";
  elements.nextTurn.innerText = "Next turn: x";
  elements.cells.forEach(function (cell) {
    cell.classList.remove("x");
    cell.classList.remove("circle");

    cell.addEventListener("click", handleClick, { once: true }); //only can click one time
  });
}
