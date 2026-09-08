const positionElement = document.querySelector("#position");
const dungeonElement = document.querySelector("#dungeon");
const facingElement = document.querySelector("#facing");

const player = {
    x: 2,
    y: 2,
    direction: "NORTH"
};

const NORTH = "NORTH";
const EAST = "EAST";
const SOUTH = "SOUTH";
const WEST = "WEST";

const UP = {
    x: 0,
    y: -1
};

const RIGHT = {
    x: 1,
    y: 0
};

const DOWN = {
    x: 0,
    y: 1
};

const LEFT = {
    x: -1,
    y: 0
};

const dungeon = [
    ["#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#"]
];

//console.log(dungeon[player.y][player.x]);

render();
document.addEventListener("keydown", handleKeyEvents);

function handleKeyEvents(event) {
    if (event.key === "ArrowUp") {
        movePlayer(UP);
        render();
    } else if (event.key === "ArrowDown") {
        movePlayer(DOWN);
        render();
    } else if (event.key === "ArrowLeft") {
        movePlayer(LEFT);
        turnLeft();
        render();
    }
    else if (event.key === "ArrowRight") {
        movePlayer(RIGHT);
        turnRight();
        render();
    }
}

function render() {
    positionElement.textContent = `Position: x=${player.x}, y=${player.y}`;
    facingElement.textContent = `Facing: ${player.direction}`;

    let dungeonMap = "";

    for (let y = 0; y < dungeon.length; y++) {
        for (let x = 0; x < dungeon[y].length; x++) {
            if (player.x === x && player.y === y) {
                dungeonMap += "@";
            } else {
                dungeonMap += dungeon[y][x];
            }
        }
        dungeonMap += "\n";
    }

    dungeonElement.textContent = dungeonMap;
}

function movePlayer(direction) {
    if (!collisionDetection(direction, player, dungeon)) {
        return;
    }

    player.x += direction.x;
    player.y += direction.y;
}

function turnRight(){
    if(player.direction === NORTH){
        player.direction = EAST;
    }else if(player.direction === EAST){
        player.direction = SOUTH;
    }else if(player.direction === SOUTH){
        player.direction = WEST;
    }else if(player.direction === WEST){
        player.direction = NORTH;
    }    
}

function turnLeft(){
    if(player.direction === NORTH){
        player.direction = WEST;
    }else if(player.direction === WEST){
        player.direction = SOUTH;
    }else if(player.direction === SOUTH){
        player.direction = EAST;
    }else if(player.direction === EAST){
        player.direction = NORTH;
    }    
}

function collisionDetection(direction) {
    const nextX = player.x + direction.x;
    const nextY = player.y + direction.y;

    return dungeon[nextY][nextX] === ".";
}