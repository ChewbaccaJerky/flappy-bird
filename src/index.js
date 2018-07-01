import Game from "./game.js";

// constant variables
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
const canvas = document.createElement("canvas");

// set dimensions for canvas
canvas.height = HEIGHT;
canvas.width = WIDTH;

// add canvas to html
document
    .body
    .appendChild(canvas);

// get context
const ctx = canvas.getContext("2d");

// initialize game 
const game = new Game(canvas, ctx, HEIGHT, WIDTH); 

//start game 
game.start();
