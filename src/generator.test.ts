import { verifyAnswer } from './generator';
import Grid from './grid';

test("verify answer basic", () => {
  let board = Grid.fill(4, 4, null);
  board.set(1, 0, 1);
  board.set(1, 1, 1);
  board.set(0, 1, 1);
  let mines = Grid.fill(4, 4, false);
  mines.set(0, 0, true);
  expect(verifyAnswer(mines, board)).toBe(true);
});
test("verify answer 2", () => {
  let n = null;
  let board = new Grid(4, 4, [
    n, 1, 1, 1,
    n, 1, n, 2,
    n, 1, 2, n,
    n, n, 1, 1,
  ]);
  let mines = Grid.fill(4, 4, false);
  mines.set(2, 1, true);
  mines.set(3, 2, true);
  expect(verifyAnswer(mines, board)).toBe(true);
});
test("verify answer wrong", () => {
  let n = null;
  let board = new Grid(4, 4, [
    n, 1, 1, 1,
    n, 1, n, 1,
    n, 1, 1, n,
    n, n, 1, 1,
  ]);
  let mines = Grid.fill(4, 4, false);
  mines.set(2, 1, true);
  mines.set(3, 2, true);
  expect(verifyAnswer(mines, board)).toBe(false);
});
