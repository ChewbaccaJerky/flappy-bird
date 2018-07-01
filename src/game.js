
import Bird from "./bird";
import Pipe from "./pipe";


class Game {
    constructor(canvas, ctx, height, width) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.height = height;
        this.width = width;
        this.FPS = 50;
        this.space = 200;
        this.gameOver = false;

        this.distanceApart = 600;
        this.bird = new Bird(canvas, ctx);
        this.pipes = [new Pipe(canvas, ctx, this.space)];
        this.source = document.getElementById("background");
        this.source.width = width;
        this.source.height = height;
    }

    start() {
        
        setInterval(()=>{
            if(this.gameOver) {
                console.log("GAME OVER");
                return;
            }
            // CLEAR
            this.clear();
            //draw background
            this.drawBackground();
            // COLLISION CHECK
            this.checkCollisions();
            // UPDATE
            this.update();
            // DRAW
            this.draw();
        }, 1000/this.FPS);
    }

    update(){
        this.bird.update();

        for(let i = 0; i < this.pipes.length; i++) {
            // check collisions
            // update
            this.pipes[i].update();
        }
    }

    draw() {
        for (let i = 0; i < this.pipes.length; i++) {
            this.pipes[i].draw();
        }

        this.bird.draw();

        // adds new pipe by distance apart
        if(this.pipes[this.pipes.length - 1].pos["x"] < this.width - this.distanceApart ) {
            this.pipes.push(new Pipe(this.canvas, this.ctx, this.space));
        }

        // remove pipe if it goes off the screen
        if(this.pipes[0].pos["x"] < -50){
            this.pipes.shift();
        }
    }
    
    checkCollisions(){
        if(this.bird.pos["y"] > window.innerHeight - 50 
        || this.bird.pos["y"] < 0) {
            this.gameOver = true;
        }

        for(let i = 0; i < this.pipes.length; i++) {
            if(this.bird.collided(this.pipes[i])) {
                this.gameOver = true;
            }
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawBackground(){
        // draw ground
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, this.height - 50, this.canvas.width, 50);
        
        // draw background image  
        this.ctx.drawImage(this.source, 0, 0, this.width, this.height);
    }
}

export default Game;