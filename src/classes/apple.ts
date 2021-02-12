class Apple {
  scale: number;
  self: p5.Vector;
  constructor() {
    this.scale = ceil(size / 80);
    this.self = this.pickLocation();
  }

  show() {
    beginShape();
    fill(0, 255, 0);
    rect(this.self.x, this.self.y, this.scale, this.scale);
    endShape();
  }

  pickLocation() {
    const cols = floor(width / this.scale);
    const rows = floor(height / this.scale);
    let self = createVector(floor(random(cols)), floor(random(rows)));
    self.mult(this.scale);
    return self;
  }
}
