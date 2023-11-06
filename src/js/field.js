export default class Field {
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
