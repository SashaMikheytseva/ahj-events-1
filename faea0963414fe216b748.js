// TODO: write code here
import Field from "./field";
import GamePlay from "./GamePlay";
const board = new Field();
const gamePlay = new GamePlay();
board.draw();
gamePlay.init(board.addGoblin, 0);
board.field.addEventListener("click", gamePlay.onCellClick);