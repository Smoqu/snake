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
    return (s.x < a.x + a.scale &&
        s.x + s.scale > a.x &&
        s.y < a.y + a.scale &&
        s.y + s.scale > a.y);
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
class Apple {
    constructor() {
        this.scale = Math.round(size / 75);
        this.x = Math.round(random(0, width - this.scale / 2));
        this.y = Math.round(random(0, height - this.scale / 2));
    }
    show() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.scale, this.scale);
    }
}
class Snake {
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
            rect(piece.x + this.scale * index + 1, piece.y + this.scale * index + 1, this.scale, this.scale);
        });
    }
    move(keyCode) {
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
        if (this.x < 0 || this.x > width)
            return true;
        if (this.y < 0 || this.y > height)
            return true;
        else
            return false;
    }
    update(piece) {
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
        }
        else {
            this.x = width / 2;
            this.y = height / 2;
        }
        if (this.borderColision())
            this.isDead = true;
    }
    eat(apple) {
        this.trail.push({ x: this.x, y: this.y });
        apple.x = random(0, width);
        apple.y = random(0, height);
        console.log(this.trail);
    }
}
