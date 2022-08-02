import {
  snakeSpeed,
  update as updateSnake,
  draw as drawSnake,
  snakeIntersection,
  getSnakeHead,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameover = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameover) {
    if (confirm("Game Over. Restart the game?")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;
  update();
  draw();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function update() {
  checkDeath();
  updateSnake();
  updateFood();
}

function checkDeath() {
  if (outsideGrid(getSnakeHead()) || snakeIntersection()) {
    gameover = true;
  }
}
window.requestAnimationFrame(main);
