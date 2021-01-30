"use strict";
class Snake {
    constructor() {
        this.trail = [];
        this.x = Math.round(width / 2);
        this.y = Math.round(height / 2);
        this.scale = Math.round(size / 75);
        this.direction = "TOP";
        this.isDead = false;
    }
    show() {
        rectMode(CENTER);
        fill(255, 255, 255);
        rect(this.x, this.y, this.scale, this.scale);
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
    update() {
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
}
