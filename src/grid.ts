export default class Grid<T> {
  list: T[];
  width: number;
  height: number;
  constructor(w: number, h: number, rawData: T[]) {
    this.list = rawData;
    this.width = w;
    this.height = h;
  }
  static fill<T>(w: number, h: number, fill: T) {
    return new Grid(w, h, new Array(w * h).fill(fill));
  }
  static from<T>(g: Grid<T>) {
    return new Grid(g.width, g.height, g.list);
  }
  get(a: number, b: number): T {
    return this.list[a + b * this.width];
  }
  set(a: number, b: number, value: T) {
    this.list[a + b * this.width] = value;
  }
  toArray(): T[] {
    return this.list;
  }
}

