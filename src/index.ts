/// <reference path="../TSDef/p5.global-mode.d.ts" />

let snake: Snake;
const size = 900;
let apple: Apple;

function setup() {
  createCanvas(size, size);
  background(0);
  frameRate(10);

  snake = new Snake(width / 2, height / 2);
  apple = new Apple(random(0, size), random(0, size));
}

// function collision(s: Snake, a: Apple) {
//   return (
//     s.x < a.x + a.scale &&
//     s.x + s.scale > a.x &&
//     s.y < a.y + a.scale &&
//     s.y + s.scale > a.y
//   );
// }

function draw() {
  snake.show();
  apple.show();
}

function keyPressed() {
  // snake.move(keyCode);
}
