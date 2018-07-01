
class ScoreBoard {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 20;
        this.y = 30;
        this.score = 0;
    }

    updateScore(){
        this.score += 1;
    }

    restartScore() {
        this.score = 0;
    }

    draw(){
        this.ctx.fillStyle = "black";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.score, this.x, this.y);
    }
}

export default ScoreBoard;