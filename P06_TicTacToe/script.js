let board = ["", "", "", "", "", "", "", "", ""];
let currPlayer = "x";

const cells = document.querySelectorAll(".cell");
const resetBtn = document.querySelector(".reset");
const messageEl = document.querySelector(".message");

cells.forEach((cell, index) =>
  cell.addEventListener("click", () => {
    if (board[index] === "" && !isGameOver()) {
      board[index] = currPlayer;
      cell.classList.add(currPlayer.toLowerCase());
      cell.innerHTML = currPlayer;
      if (isGameOver()) {
        messageEl.innerHTML = currPlayer + " wins!";
        cells.forEach((cell) =>
          cell.removeEventListener("click", handleCellClick)
        );
      } else if (!board.includes("")) {
        messageEl.innerHTML = "It's a draw!";
      } else {
        currPlayer = currPlayer == "x" ? "o" : "x";
        messageEl.innerHTML = currPlayer + " 's turn";
      }
    }
  })
);

resetBtn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  currPlayer = "x";
  cells.forEach((cell) => {
    cell.classList.remove("x", "o");
    cell.innerHTML = "";
  });
  messageEl.innerHTML = "X's turn";
  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
});

function isGameOver() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombos.some((combo) => {
    return (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    );
  });
}

function handleCellClick() {
  console.log("cell clicked");
}
