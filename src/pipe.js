import Object from "./object";



class Pipe extends Object {
    constructor(canvas, context, space, vx){
        const defaultPos = {x: window.innerWidth, y: window.innerHeight - 50};
        super(canvas, context, defaultPos);
        this.width = 75;
        this.height = window.innerHeight;
        this.vx = vx;
        this.space = space;
        this.ground = 50;
        this.topPipe = Math.random() * (window.innerHeight - this.space - this.ground);
        this.source = document.getElementById("bottom-pipe");
        console.log(vx);
    }

    draw(){
        // main body
        this.ctx.fillStyle = "green";
        // top pipe
        this.ctx.fillRect(this.pos["x"], 0, this.width, this.topPipe);
        // this.ctx.drawImage(this.source, this.pos["x"], 0, this.width, this.topPipe);
        // bottom pipe
        this.ctx.fillRect(this.pos["x"], this.topPipe + this.space, this.width, this.height - this.topPipe + this.space);
        // this.ctx.drawImage(this.source, this.pos["x"], this.topPipe + this.space, this.width, this.height - this.topPipe + this.space);
        
        
    }

    update(){
        this.pos.x -= this.vx;
    }
    
    pos(){
        return this.pos;
    }
}

export default Pipe;