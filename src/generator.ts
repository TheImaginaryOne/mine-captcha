import Grid from './grid';

export function generateBoard(size: number): Grid<number> {
  const minesList = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (Math.random() < 0.25) {
        minesList.push([i, j]);
      }
    }
  }

  const board = Grid.fill(size, size, 0);
  for (const [a, b] of minesList) {
    for (let x = Math.max(a-1, 0); x <= Math.min(a+1, size - 1); x++) {
      for (let y = Math.max(b-1, 0); y <= Math.min(b+1, size - 1); y++) {
        board.set(x, y, board.get(x, y) + 1);
      }
    }
  }
  for (const [a, b] of minesList) {
    board.set(a, b, null);
  }

  return board;
}
