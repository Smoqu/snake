class Snake {
  trail: Array<{ x: number; y: number }>;
  x: number;
  y: number;
  scale: number;
  direction: string;
  isDead: boolean;

  constructor() {
    this.x = Math.round(width / 2);
    this.y = Math.round(height / 2);

    this.trail = [];
    this.scale = Math.round(size / 75);

    this.direction = "TOP";

    this.isDead = false;
  }

  show() {
    fill(255, 0, 255);
    rect(this.x, this.y, this.scale, this.scale);
    this.trail.forEach((piece, index) => {
      this.update(piece);
      fill(255, 255, 255);
      rect(
        piece.x + this.scale * index + 1,
        piece.y + this.scale * index + 1,
        this.scale,
        this.scale
      );
    });
  }

  move(keyCode: number) {
    switch (keyCode) {
      case 39:
        this.direction = "RIGHT";
        break;
      case 37:
        this.direction = "LEFT";
        break;
      case 38:
        this.direction = "TOP";
        break;
      case 40:
        this.direction = "BOTTOM";
        break;
      default:
        break;
    }
  }

  borderColision() {
    if (this.x < 0 || this.x > width) return true;
    if (this.y < 0 || this.y > height) return true;
    else return false;
  }

  update(piece: { x: number; y: number }) {
    if (!this.isDead) {
      switch (this.direction) {
        case "TOP":
          piece.y -= this.scale;
          break;
        case "BOTTOM":
          piece.y += this.scale;
          break;
        case "RIGHT":
          piece.x += this.scale;
          break;
        case "LEFT":
          piece.x -= this.scale;
          break;
        default:
          break;
      }
    } else {
      this.x = width / 2;
      this.y = height / 2;
    }

    if (this.borderColision()) this.isDead = true;
  }

  eat(apple: Apple) {
    this.trail.push({ x: this.x, y: this.y });
    apple.x = random(0, width);
    apple.y = random(0, height);
    console.log(this.trail);
  }
}
