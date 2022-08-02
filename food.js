import { grow, onSnake} from './snake.js';
import {randomFoodPosition} from './grid.js';
let food = {x: Math.floor(Math.random() * 21 )+ 1, y: Math.floor(Math.random() * 21 )+ 1}
let growthRate = 3;


export function update(){
    if (onSnake(food)){
        grow(growthRate);
        food = getRandomFoodPostion();
    }
}


export function draw(gameBoard){
    const foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPostion(){
    let newFoodPostion;
    while (newFoodPostion == null || onSnake(newFoodPostion)){
        newFoodPostion = randomFoodPosition();
    }
    return newFoodPostion;
}