import { getInputDirection } from "./input.js";

export const snakeSpeed = 8;
const snakeBody = [{x : 11, y : 11}];
let newSegment = 0;

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}



// export function update(){
//     // 刪除最後一個
//     // 在更新方向的地方加上一個div 並放在list最前面
//     const inputDirection = getInputDirection();
    
//     snakeBody.unshift({x : snakeBody[0].x + inputDirection.x, y : snakeBody[0].y + inputDirection.y});
//     snakeBody.pop();
// }


export function update() {
    addSegment(newSegment);
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = { ...snakeBody[i] }
    }
    
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
  }



export function onSnake(food){
    return  snakeBody.some(segment => {
                return equalPosition(segment, food);
    })
}

function equalPosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}


export function grow(amount){
    newSegment = newSegment + amount;
}

function addSegment(){
    for (let i = 0; i < newSegment; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1] });
    }
    newSegment = 0;
}


export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return (snakeBody.slice(1).some(segment => {
        return equalPosition(snakeBody[0], segment);
    }))
}
