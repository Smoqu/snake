/// <reference path="../TSDef/p5.global-mode.d.ts" />

let snake: Snake;
const size = 900;
let apple: Apple;

function setup() {
  createCanvas(size, size);
  background(0);
  frameRate(10);

  snake = new Snake();
  apple = new Apple();
}

function collision(s: Snake, a: Apple) {
  return (
    s.x < a.x + a.scale &&
    s.x + s.scale > a.x &&
    s.y < a.y + a.scale &&
    s.y + s.scale > a.y
  );
}

function draw() {
  background(0);
  snake.show();
  snake.update(snake);
  apple.show();

  if (collision(snake, apple)) {
    snake.eat(apple);
  }
}

function keyPressed() {
  snake.move(keyCode);
}
