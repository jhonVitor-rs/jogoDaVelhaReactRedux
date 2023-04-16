type Cell = {
  index: number
  value: string
}

function checkWinner(board: Cell[]) {
  const winningConditions = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a].value && board[a].value === board[b].value && board[b].value === board[c].value && board[a].value === board[c].value) {
      return true;
    }
  }
  return false;
}

export default checkWinner
