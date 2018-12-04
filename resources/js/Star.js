import _ from 'lodash';

class Star {
    constructor(x, y, direction, speed) {
        this.x = x;
        this.y = y;
        this.lastX = x;
        this.lastY = y;
        this.direction = direction;
        this.color = Star.getRandomHexColor(16);
        this.timer = 1 + Math.floor(Math.random() * 5);
        this.animate = this.animate.bind(this);
        this.speed = speed;
        this.lifetime = 0;
    }

    static getRandomHexColor(cap) {
        // const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
        // let ret = '#';
        // for (let i = 0; i < 6; i++) {
        //     const r = Math.floor(Math.random() * cap);
        //     ret += hexValues[cap - 1 - r];
        // }
        let colors = ['1A535C','4ECDC4','F7FFF7','FF6B6B','FFE66D'];
        return '#'+_.sample(colors);
    }

    animate(mode, mouseX, mouseY, width) {
        const x = this.x;
        const y = this.y;
        this.lastX = x;
        this.lastY = y;
        this.lifetime+=Math.random()*2;
        let d = x + y;
        switch (mode) {
            case 0:
                d = Math.atan2(x - mouseX, y - mouseY);
                break;
            case 1:
                d = Math.tan((x - mouseX) / (y - mouseY));
                break;
            case 2:
                d = Math.sin((x - mouseX) / (y - mouseY));
                break;
            case 3:
                d = Math.cos((x - mouseX) / (y - mouseY));
                break;
            case 4:
                d = Math.atan2(mouseX - x, y - mouseY);
                break;
            case 5:
                d = Math.tan((mouseX - x) / (y - mouseY));
                break;
            case 6:
                d = Math.atan((mouseX - x) / (y - mouseY));
                break;
        }
        this.direction = d;
        const maxDistance = width / 4;
        const currentDistance = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
        const relDistRatio = (maxDistance - currentDistance) / maxDistance;
        let speedMod = (Math.pow(relDistRatio, 3) - 3 * Math.pow(relDistRatio, 2)) * Math.sign(maxDistance - currentDistance);
        speedMod = Math.sign(speedMod) * Math.max(this.speed/10, Math.min(Math.abs(speedMod), this.speed * 1.5));
        const dx = Math.cos(this.direction) * this.speed * speedMod;
        const dy = -Math.sin(this.direction) * this.speed * speedMod;
        this.x += dx;
        this.y += dy;
    }

    isOutOfBounds(width, height) {
        if (this.timer > 0) {
            this.timer--;
            return false;
        } else {
            this.timer = 1 + Math.floor(Math.random() * 5);
            return (this.x < 0 || this.x > width || this.y < 0 || this.y > height);
        }
    }

    draw(canvas) {
        canvas.beginPath();
        canvas.moveTo(this.lastX, this.lastY);
        canvas.lineTo(this.x, this.y);
        canvas.lineWidth = 15;
        canvas.stroke();
    }
}

export default Star;