/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/field.js
class Field {
  constructor() {
    this.size = 4;
    this.cells = [];
    this.posGoblin = 0;
    this.field = document.querySelector(".field");
    this.addGoblin = this.addGoblin.bind(this);
  }
  draw() {
    //const field = document.querySelector(".field");
    for (let i = 0; i < this.size * 4; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.field.appendChild(cell);
      this.cells.push(cell);
    }
  }
  addGoblin() {
    const random = Math.floor(Math.random() * this.cells.length);
    if (this.posGoblin !== random) {
      this.cells[this.posGoblin].classList.remove("goblin");
      this.cells[random].classList.add("goblin");
      this.posGoblin = random;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/GamePlay.js
class GamePlay {
  constructor() {
    this.caught = 0;
    this.unCaught = 0;
    this.dead = document.querySelector(".dead");
    this.lost = document.querySelector(".lost");
    this.dead.textContent = `Попадания: ${this.caught}`;
    this.lost.textContent = `Промахи: ${this.unCaught}`;
    this.onCellClick = this.onCellClick.bind(this);
  }
  init(func) {
    let interval = setInterval(() => {
      func();
      if (this.unCaught > 4) {
        clearInterval(interval);
        this.caught = 0;
        this.unCaught = 0;
        this.dead.textContent = `Попадания: ${this.caught}`;
        this.lost.textContent = `Промахи: ${this.unCaught}`;
        if (confirm("Вы проиграли! Начать заново?")) {
          window.location.reload();
        }
      }
    }, 1000);
  }
  onCellClick(event) {
    const target = event.target;
    if (target.classList.contains("goblin")) {
      target.classList.remove("goblin");
      this.caught++;
      this.dead.textContent = `Попадания: ${this.caught}`;
    } else {
      this.unCaught++;
      this.lost.textContent = `Промахи: ${this.unCaught}`;
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


const board = new Field();
const gamePlay = new GamePlay();
board.draw();
gamePlay.init(board.addGoblin, 0);
board.field.addEventListener("click", gamePlay.onCellClick);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;