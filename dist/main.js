/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object.js */ \"./src/object.js\");\n\n\nconst defaultPos = { x: 150, y: window.innerHeight - 500};\n\nclass Bird extends _object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(canvas, ctx){   \n        super(canvas, ctx, defaultPos);\n        this.r = 20;\n        this.vy = 0;\n        this.gravity = 7;\n        this.handleFly();\n        this.jump = false;\n        this.MAX_JUMP = 60;\n        this.source = document.getElementById(\"bird\");\n    }\n\n    draw(){\n        // regular\n        this.ctx.drawImage(this.source, this.pos[\"x\"], this.pos[\"y\"], 40, 40);\n        // lift\n        // falling\n    }\n\n    update(){\n        // handle gravity\n        if(this.jump) {\n            this.pos[\"y\"] -= this.vy;\n            this.vy *= 0.5;\n\n            if(this.vy < 1) {\n                this.jump = false;\n            }\n        }\n        else if(this.pos[\"y\"] < window.innerHeight - 50){\n            this.pos[\"y\"] += this.gravity;\n        }\n    }\n\n    handleFly() {\n        window.addEventListener(\"keydown\", (evt)=> {\n            switch(evt.code) {\n                case \"Space\":\n                    this.jump = true;\n                    this.vy = this.MAX_JUMP;\n                    break;\n\n                default:\n            }\n        });\n    }\n\n    collided(pipe) {\n        const ceil = pipe.topPipe;\n        const floor = ceil + pipe.space;\n        const x = pipe.pos[\"x\"];\n        const y = pipe.pos[\"y\"];\n        const width = pipe.width;\n        // checking bottom pipe\n        if(this.collidedBottomPipe(x, floor, width) || this.colliededTopPipe(x, ceil, width)) {\n            return true;\n        }\n\n        return false;\n    }\n\n    collidedBottomPipe(x, floor, width){\n        return (\n            (this.pos[\"x\"] + this.r > x \n            && this.pos[\"x\"] + this.r <= x + width)\n            && this.pos[\"y\"] + this.r > floor);\n    }\n\n    colliededTopPipe(x, ceil, width) {\n        return (\n            (this.pos[\"x\"] + this.r > x \n            && this.pos[\"x\"] + this.r <= x + width)\n            && this.pos[\"y\"] + this.r < ceil);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bird);\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe */ \"./src/pipe.js\");\n\n\n\n\n\nclass Game {\n    constructor(canvas, ctx, height, width) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.height = height;\n        this.width = width;\n        this.FPS = 50;\n        this.space = 200;\n        this.gameOver = false;\n\n        this.distanceApart = 600;\n        this.bird = new _bird__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n        this.pipes = [new _pipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, ctx, this.space)];\n        this.source = document.getElementById(\"background\");\n        this.source.width = width;\n        this.source.height = height;\n    }\n\n    start() {\n        \n        setInterval(()=>{\n            if(this.gameOver) {\n                console.log(\"GAME OVER\");\n                return;\n            }\n            // CLEAR\n            this.clear();\n            //draw background\n            this.drawBackground();\n            // COLLISION CHECK\n            this.checkCollisions();\n            // UPDATE\n            this.update();\n            // DRAW\n            this.draw();\n        }, 1000/this.FPS);\n    }\n\n    update(){\n        this.bird.update();\n\n        for(let i = 0; i < this.pipes.length; i++) {\n            // check collisions\n            // update\n            this.pipes[i].update();\n        }\n    }\n\n    draw() {\n        for (let i = 0; i < this.pipes.length; i++) {\n            this.pipes[i].draw();\n        }\n\n        this.bird.draw();\n\n        // adds new pipe by distance apart\n        if(this.pipes[this.pipes.length - 1].pos[\"x\"] < this.width - this.distanceApart ) {\n            this.pipes.push(new _pipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas, this.ctx, this.space));\n        }\n\n        // remove pipe if it goes off the screen\n        if(this.pipes[0].pos[\"x\"] < -50){\n            this.pipes.shift();\n        }\n    }\n    \n    checkCollisions(){\n        if(this.bird.pos[\"y\"] > window.innerHeight - 50 \n        || this.bird.pos[\"y\"] < 0) {\n            this.gameOver = true;\n        }\n\n        for(let i = 0; i < this.pipes.length; i++) {\n            if(this.bird.collided(this.pipes[i])) {\n                this.gameOver = true;\n            }\n        }\n    }\n\n    clear(){\n        // console.log(this.ctx.clearRect);\n        this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n\n    drawBackground(){\n        // draw ground\n        this.ctx.fillStyle = \"green\";\n        this.ctx.fillRect(0, this.height - 50, this.canvas.width, 50);\n        \n        // draw background image  \n        this.ctx.drawImage(this.source, 0, 0, this.width, this.height);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n// constant variables\nconst HEIGHT = window.innerHeight;\nconst WIDTH = window.innerWidth;\nconst canvas = document.createElement(\"canvas\");\n\n// set dimensions for canvas\ncanvas.height = HEIGHT;\ncanvas.width = WIDTH;\n\n// add canvas to html\ndocument\n    .body\n    .appendChild(canvas);\n\n// get context\nconst ctx = canvas.getContext(\"2d\");\n\n// initialize game \nconst game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, HEIGHT, WIDTH); \n\n//start game \ngame.start();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Object {\n    constructor(canvas, context, pos) {\n        this.canvas = canvas;\n        this.ctx = context;\n        this.pos = pos;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object);\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ }),

/***/ "./src/pipe.js":
/*!*********************!*\
  !*** ./src/pipe.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/object.js\");\n\n\n\n\nclass Pipe extends _object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(canvas, context, space){\n        const defaultPos = {x: window.innerWidth, y: window.innerHeight - 50};\n        super(canvas, context, defaultPos);\n        this.width = 75;\n        this.height = window.innerHeight;\n        this.vx = 10;\n        this.space = space;\n        this.ground = 50;\n        this.topPipe = Math.random() * (window.innerHeight - this.space - this.ground);\n        this.source = document.getElementById(\"bottom-pipe\");\n    }\n\n    draw(){\n        // main body\n        this.ctx.fillStyle = \"gray\";\n        // top pipe\n        this.ctx.fillRect(this.pos[\"x\"], 0, this.width, this.topPipe);\n        // this.ctx.drawImage(this.source, this.pos[\"x\"], 0, this.width, this.topPipe);\n        // this.ctx.fillRect(this.pos[\"x\"], this.topPipe + this.space, this.width, this.height - this.topPipe + this.space);\n        this.ctx.drawImage(this.source, this.pos[\"x\"], this.topPipe + this.space, this.width, this.height - this.topPipe + this.space);\n        // cleared rect\n        // this.ctx.clearRect(this.pos[\"x\"], this.topPipe, this.width, this.space);\n    }\n\n    update(){\n        this.pos.x -= 5;\n    }\n    \n    pos(){\n        return this.pos;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pipe);\n\n//# sourceURL=webpack:///./src/pipe.js?");

/***/ })

/******/ });