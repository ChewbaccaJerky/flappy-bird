import Object from "./object.js";

const defaultPos = { x: 150, y: window.innerHeight - 500};

class Bird extends Object {
    constructor(canvas, ctx){   
        super(canvas, ctx, defaultPos);
        this.r = 20;
        this.vy = 0;
        this.gravity = 7;
        this.handleFly();
        this.jump = false;
        this.MAX_JUMP = 60;
        this.source = document.getElementById("bird");
    }

    draw(){
        // regular
        this.ctx.drawImage(this.source, this.pos["x"], this.pos["y"], 40, 40);
        // lift
        // falling
    }

    update(){
        // handle gravity
        if(this.jump) {
            this.pos["y"] -= this.vy;
            this.vy *= 0.5;

            if(this.vy < 1) {
                this.jump = false;
            }
        }
        else if(this.pos["y"] < window.innerHeight - 50){
            this.pos["y"] += this.gravity;
        }
    }

    handleFly() {
        window.addEventListener("keydown", (evt)=> {
            switch(evt.code) {
                case "Space":
                    this.jump = true;
                    this.vy = this.MAX_JUMP;
                    break;

                default:
            }
        });
    }

    collided(pipe) {
        const ceil = pipe.topPipe;
        const floor = ceil + pipe.space;
        const x = pipe.pos["x"];
        const y = pipe.pos["y"];
        const width = pipe.width;
        // checking bottom pipe
        if(this.collidedBottomPipe(x, floor, width) || this.colliededTopPipe(x, ceil, width)) {
            return true;
        }

        return false;
    }

    collidedBottomPipe(x, floor, width){
        return (
            (this.pos["x"] + this.r > x 
            && this.pos["x"] + this.r <= x + width)
            && this.pos["y"] + this.r > floor);
    }

    colliededTopPipe(x, ceil, width) {
        return (
            (this.pos["x"] + this.r > x 
            && this.pos["x"] + this.r <= x + width)
            && this.pos["y"] + this.r < ceil);
    }
}

export default Bird;