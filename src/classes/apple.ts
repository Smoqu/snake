class Apple {
  x: number;
  y: number;

  scale: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.scale = floor(size / 100);
  }

  show() {
    rect(this.x, this.y, this.scale, this.scale);
  }
}
