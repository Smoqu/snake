"use strict";
class Apple {
    constructor() {
        this.scale = Math.round(size / 75);
        this.x = Math.round(random(0, width - this.scale / 2));
        this.y = Math.round(random(0, height - this.scale / 2));
    }
    show() {
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(this.x, this.y, this.scale, this.scale);
    }
}
