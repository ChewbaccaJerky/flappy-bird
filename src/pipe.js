import Object from "./object";



class Pipe extends Object {
    constructor(canvas, context, space){
        const defaultPos = {x: window.innerWidth, y: window.innerHeight - 50};
        super(canvas, context, defaultPos);
        this.width = 75;
        this.height = window.innerHeight;
        this.vx = 10;
        this.space = space;
        this.ground = 50;
        this.topPipe = Math.random() * (window.innerHeight - this.space - this.ground);
        this.source = document.getElementById("bottom-pipe");
    }

    draw(){
        // main body
        this.ctx.fillStyle = "green";
        // top pipe
        this.ctx.fillRect(this.pos["x"], 0, this.width, this.topPipe);
        // this.ctx.drawImage(this.source, this.pos["x"], 0, this.width, this.topPipe);
        this.ctx.fillRect(this.pos["x"], this.topPipe + this.space, this.width, this.height - this.topPipe + this.space);
        // this.ctx.drawImage(this.source, this.pos["x"], this.topPipe + this.space, this.width, this.height - this.topPipe + this.space);
        // cleared rect
        // this.ctx.clearRect(this.pos["x"], this.topPipe, this.width, this.space);
    }

    update(){
        this.pos.x -= 5;
    }
    
    pos(){
        return this.pos;
    }
}

export default Pipe;