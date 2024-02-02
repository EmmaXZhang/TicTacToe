// const
const winningCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// state varibles
const state = {
  currentClass: "x",
  circleClass: "circle",
  xClass: "x",
  //   circleTurn: "",
};

//cached elements
const elements = {
  cells: document.querySelectorAll(".cell"),
};

//event listener
elements.cells.forEach(function (cell) {
  cell.addEventListener("click", handleClick, { once: true }); //only can click one time
});

//function
function handleClick(event) {
  //define clicked cell
  const cell = event.target;

  //add X or O class to show mark
  placeMark(cell, state.currentClass);

  //check wins
  //check draw

  //switch player
  switchPlayer(state.currentClass);
}

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
