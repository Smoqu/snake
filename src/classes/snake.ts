// Some of this code has been inspired or taken from Daniel Shiffman's snake code.

class Snake {
  x: number;
  y: number;
  direction: string;
  scale: number;
  isDead: boolean;
  total: number;
  tail: p5.Vector[];

  constructor(x: number, y: number) {
    this.x = ceil(x);
    this.y = ceil(y);
    this.scale = ceil(size / 80);
    this.direction = "TOP";
    this.isDead = false;
    this.total = 0;
    this.tail = [];
  }

  show() {
    fill(255, 255, 255);

    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
    }
    fill(255, 0, 0);
    rect(this.x, this.y, this.scale, this.scale);
  }

  update() {
    if (!this.isDead) {
      if (this.total === this.tail.length) {
        for (let i = 0; i < this.tail.length - 1; i++) {
          this.tail[i] = this.tail[i + 1];
        }
      }

      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    if (!this.isDead) {
      switch (this.direction) {
        case "TOP":
          this.y -= this.scale;
          break;
        case "BOTTOM":
          this.y += this.scale;
          break;
        case "RIGHT":
          this.x += this.scale;
          break;
        case "LEFT":
          this.x -= this.scale;

        default:
          break;
      }
    }

    this.x = constrain(this.x, 0, width - this.scale);
    this.y = constrain(this.y, 0, height - this.scale);
    if (this.selfConstrain()) {
      this.isDead = true;
    }
    this.death();
  }

  selfConstrain() {
    return (
      this.x === 0 ||
      this.x + this.scale === size ||
      this.y === 0 ||
      this.y + this.scale === size
    );
  }

  death() {
    this.tail.forEach((pos) => {
      const d = dist(this.x, this.y, pos.x, pos.y);

      if (d < 1) {
        this.isDead = true;
      }
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

  eat(apple: Apple) {
    this.total++;
    apple.self = apple.pickLocation();
  }
}
