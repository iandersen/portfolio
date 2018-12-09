import Skill from './Skill';

class SkillsCanvasController{
    constructor(element){
        this.width = 0;
        this.height = 0;

        this.skillMovement = 1000;
        this.skills = [
            new Skill('Java'),
            new Skill('PHP'),
            new Skill('MySQL'),
            new Skill('Javascript'),
            new Skill('ReactJS'),
            new Skill('Laravel'),
            new Skill('NodeJS'),
            new Skill('HTML5'),
            new Skill('CSS3'),
            new Skill('Git Flow'),
            new Skill('My Skills ->', true)
        ];
        this.mouseX = 0;
        this.mouseY = 0;

        this.FPS = 60;

        this.c = element;
        const self = this;
        if (this.c != null) {
            this.updateSize();
            this.mouseX = this.width / 2;
            this.mouseY = this.height / 2;
            $(window).scroll( () => {
                const doc = document.documentElement;
                const rect = self.c.getBoundingClientRect();
                self.mouseX = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)-rect.left;
                self.mouseY = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)-$(self.c).offset().top;
            });
            this.ctx = this.c.getContext('2d');
            setInterval(function () {
                self.update();
                self.draw();
            }, 1000 / this.FPS);
        }
    }

    update() {
        this.updateSize();
        this.skills.forEach((skill)=>{
            skill.updatePosition(this.mouseX, this.mouseY, this.width, this.height, this.skillMovement);
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.skills.forEach((skill)=>{
            skill.draw(this.ctx);
        });
    }

    updateSize() {
        this.c.width = this.c.clientWidth;
        this.c.height = this.c.parentNode.clientHeight;
        this.width = this.c.width;
        this.height = this.c.height;
    }
}

export default SkillsCanvasController;