"use strict";
/// <reference path="../TSDef/p5.global-mode.d.ts" />
let snake;
const size = 900;
let apple;
function setup() {
    createCanvas(size, size);
    background(0);
    frameRate(10);
    snake = new Snake();
    apple = new Apple();
}
function collision(s, a) {
    if (s.x + s.scale / 2 <= a.x - a.scale / 2 &&
        s.x - s.scale / 2 >= a.x + a.scale / 2 &&
        s.y + s.scale / 2 <= a.y - a.scale / 2 &&
        s.y - s.scale / 2 >= a.y + a.scale / 2)
        console.log("eaten");
}
function draw() {
    background(0);
    snake.show();
    snake.update();
    apple.show();
    collision(snake, apple);
}
function keyPressed() {
    snake.move(keyCode);
}
