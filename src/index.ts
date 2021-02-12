/// <reference path="../TSDef/p5.global-mode.d.ts" />

let snake: Snake;
const size = 800;
let apple: Apple;

function setup() {
  createCanvas(size, size);
  background(0);
  frameRate(10);

  snake = new Snake(width / 2, height / 2);
  apple = new Apple();
}

function collision(s: Snake, a: Apple) {
  return (
    s.x < a.self.x + a.scale &&
    s.x + s.scale > a.self.x &&
    s.y < a.self.y + a.scale &&
    s.y + s.scale > a.self.y
  );
}

function draw() {
  background(0);
  snake.show();
  apple.show();
  snake.update();

  if (collision(snake, apple)) {
    snake.eat(apple);
  }
}

function keyPressed() {
  snake.move(keyCode);
}
