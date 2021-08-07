import Grid from './grid';

// Based on lodash
function shuffle<T>(array: T[]): T[] {
  const length = array.length;
  let index = -1;
  const lastIndex = length - 1;
  const result = [...array];
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}

function randInteger(a: number, b: number) {
  return Math.floor((b - a) * Math.random() + a);
}

/**
 * Add a mine, updating the board of counts.
 */
function addMine(board: Grid<number>, a: number, b: number) {
  for (let x = Math.max(a-1, 0); x <= Math.min(a+1, board.width - 1); x++) {
    for (let y = Math.max(b-1, 0); y <= Math.min(b+1, board.height - 1); y++) {
      board.set(x, y, board.get(x, y) + 1);
    }
  }
}

/**
 * Is the selected mines (selected by the user) a valid selection
 * for the given board of counts?
 */
export function verifyAnswer(selected: Grid<boolean>, board: Grid<number>) {
  // TODO assert same size???
  let width = selected.width;
  let height = selected.height;
  const proposedBoard = Grid.fill(width, height, 0);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (selected.get(i, j)) {
        addMine(proposedBoard, i, j);
      }
    }
  }
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let realCount = board.get(i, j);
      if (realCount !== null 
          && proposedBoard.get(i, j) !== realCount) {
        return false;
      }
    }
  }
  return true;
}

export function generateBoard(size: number): Grid<number> {
  const totalSquares = size * size;
  let nums = new Array(totalSquares);
  for (let i = 0; i < totalSquares; i++) {
    nums[i] = i;
  }
  nums = shuffle(nums);
  let numMines = randInteger(totalSquares / 4, totalSquares / 3 + 1);

  const board = Grid.fill(size, size, 0);
  for (let i = 0; i < numMines; i++) {
    let x = nums[i];
    let a = x % size;
    let b = Math.floor(x / size);
    addMine(board, a, b);
  }
  // how many square should be blank? 
  // (excluding mine squares, which are blank anyway)
  let numBlankSquares = totalSquares / 4;
  for (let i = 0; i < numMines + numBlankSquares; i++) {
    let x = nums[i];
    let a = x % size;
    let b = Math.floor(x / size);
    board.set(a, b, null);
  }
  // Some squares will have '0'. Blank out those squares
  // (because '0' does not typically appear in Minesweeper.)
  // In real Minesweeper, EVERY square with '0' will be indicated
  // but we will not indicate them here.
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let count = board.get(i, j);
      if (count === 0) {
        board.set(i, j, null);
      }
    }
  }

  return board;
}
