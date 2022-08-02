import {getSnakeHead} from './snake.js';
const Grid_Size = 21;
export function randomFoodPosition(){
    return {
        x : Math.floor(Math.random() * Grid_Size) + 1,
        y : Math.floor(Math.random() * Grid_Size) + 1,
    }
}


export function outsideGrid(SnakeHead){
    let posX = SnakeHead.x;
    let posY = SnakeHead.y;
    return (
        posX < 1 || posX > Grid_Size || posY < 1 || posY > Grid_Size
    );
}