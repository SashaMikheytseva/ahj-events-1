export default class GamePlay {
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
