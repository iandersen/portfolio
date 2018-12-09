import _ from 'lodash';

let skillOrder = 0;

class Skill {
    constructor(text, isTitle) {
        this.order = skillOrder++;
        this.isTitle = !!isTitle;
        this.text = text;
        this.color = Skill.getRandomHexColor();
        this.x = 0;
        this.y = 0;
    }

    static getRandomHexColor() {
        let colors = ['1A535C','4ECDC4','FF6B6B'];
        return '#'+_.sample(colors);
    }

    updatePosition(mouseX, mouseY, width, height, maxDistance){
        const columnWidth = width;
        const columnHeight = 50;
        const marginY = -100;
        const columnsPerRow = Math.floor(width/columnWidth);
        const column = this.order % columnsPerRow;
        const row = Math.floor(this.order / columnsPerRow);
        const marginX = (width - columnsPerRow * columnWidth) / 2;
        let x = marginX + column * columnWidth + columnWidth / 2;
        let y = marginY + row * columnHeight + columnHeight / 2;
        if(this.isTitle)
            y = marginY + columnHeight * 2;
        // const diffX = (maxDistance/15) * Skill.sign(mouseX-x) * (Math.pow(mouseX-x,2) / Math.pow(width, 2));
        const diffX = 0;
        const diffY = maxDistance * Skill.sign(mouseY-y) * (Math.pow(mouseY-y,2) / Math.pow(height, 2));
        if(this.isTitle)
            x -= width;
        this.x = x - diffX;
        this.y = y - diffY;
    }

    static sign(x){
        if( +x === x ) { // check if a number was given
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.font = '3em Arial';
        context.textAlign="center";
        context.textBaseline="middle";
        context.fillText(this.text, this.x, this.y);
    }
}

export default Skill;