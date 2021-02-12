class Snake {
  x: number;
  y: number;
  direction: string;
  scale: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.scale = floor(size / 100);
    this.direction = "UP";
  }

  show() {
    rect(this.x, this.y, this.scale, this.scale);
  }

  //   update() {
  //       switch(this.direction) {
  //           case "UP":
  //               this.x
  //       }
  //   }

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
}
