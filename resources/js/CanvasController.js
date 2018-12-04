import Star from './Star';

class CanvasController{
    constructor(){
        this.width = 0;
        this.height = 0;

        this.starSpeed = 2;
        this.stars = [];
        this.numStars = 1000;
        this.mouseX = 0;
        this.mouseY = 0;

        this.FPS = 60;
        this.bkgColor = '#111';

        this.mode = 0;
        this.modes = 7;

        this.c = document.getElementById('jumbotronCanvas');
        const self = this;
        if (this.c != null) {
            this.updateSize();
            this.mouseX = this.width / 2;
            this.mouseY = this.height / 2;
            this.c.addEventListener('mousemove', function (evt) {
                const rect = self.c.getBoundingClientRect();
                self.mouseX = evt.clientX - rect.left;
                self.mouseY = evt.clientY - rect.top;
            }, true);
            this.c.addEventListener('click', function (evt) {
                self.mode++;
                if (self.mode >= self.modes)
                    self.mode = 0;
            }, true);
            this.ctx = this.c.getContext('2d');

            for (let i = 0; i < this.numStars; i++)
                this.stars[i] = this.createStar();
            this.ctx.fillStyle = this.bkgColor;
            this.ctx.fillRect(0, 0, this.width, this.height);
            setInterval(function () {
                self.update();
                self.draw();
            }, 1000 / this.FPS);
        }
    }

    update() {
        this.updateSize();
        for (let i = 0; i < this.numStars; i++) {
            if (this.stars[i].isOutOfBounds(this.width, this.height) || this.stars[i].lifetime > 600) {
                this.stars[i] = this.createStar();
            }
            this.stars[i].animate(this.mode, this.mouseX, this.mouseY, this.width);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = this.bkgColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.numStars; i++) {
            this.ctx.strokeStyle = this.stars[i].color;
            this.stars[i].draw(this.ctx);
        }
    }

    updateSize() {
        this.c.width = this.c.parentNode.clientWidth;
        this.c.height = this.c.parentNode.clientHeight;
        this.width = this.c.width;
        this.height = this.c.height;
    }

    createStar() {
        const x = Math.random() * this.width;
        const y = Math.random() * this.height;
        const direction = Math.atan2(this.mouseX - x, y - this.mouseY);
        return new Star(x, y, direction,this.starSpeed);
    }
}

export default CanvasController;