const generateBoard = (whiteQueen, blackQueen) => {
  let resultBoard = [];
  for (let rows = 0; rows < 8; rows++) {
    resultBoard[rows] = [];
    for (let cols = 0; cols < 8; cols++) {
      resultBoard[rows][cols] = 0;
    }
  }
  resultBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  resultBoard[blackQueen[0]][blackQueen[1]] = 1;
  return resultBoard;
};

const scanQueens = generatedBoard => {
  let boardCopy = [...generatedBoard];
  let queenPos = [];
  for (let queen = 0; queen < 2; queen++) {
    const row = boardCopy.findIndex(row => row.includes(1));
    const col = boardCopy[row].indexOf(1);
    queenPos.push([row, col]);
    boardCopy[row][col] = 0;
  }
  return queenPos;
};

const queenThreat = generatedBoard => {
  let queenPos = scanQueens(generatedBoard);
  let wQueenRow = queenPos[0][0];
  let wQueenCol = queenPos[0][1];
  let bQueenRow = queenPos[1][0];
  let bQueenCol = queenPos[1][1];
  if (wQueenRow + wQueenCol === bQueenRow + bQueenCol) return true;
  else if (Math.abs(wQueenRow - wQueenCol) === Math.abs(bQueenRow - bQueenCol)) return true;
  else if (wQueenRow === bQueenRow || wQueenCol === bQueenCol) return true;
  return false;
};

let whiteQueen = [5, 1];
let blackQueen = [0, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));