const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGameModel = document.querySelector(".start-game");
const gameOverModel = document.querySelector(".game-over");
const restartButton = document.querySelector(".btn-restart");

const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");
const highScoreElement = document.querySelector("#high-score");

const blockWidth = 50;
const blockHeight = 50;

let highScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = "00-00";

highScoreElement.textContent = highScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timerIntervalId = null;

let food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols)
};

const blocks = [];
let snake = [{ x: 1, y: 3 }];
let direction = "right";

/* Create Board */
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row}-${col}`] = block;
    }
}

function render() {
    let head;

    // Direction logic
    if (direction === "left") head = { x: snake[0].x, y: snake[0].y - 1 };
    else if (direction === "right") head = { x: snake[0].x, y: snake[0].y + 1 };
    else if (direction === "up") head = { x: snake[0].x - 1, y: snake[0].y };
    else if (direction === "down") head = { x: snake[0].x + 1, y: snake[0].y };

    // Wall collision
    if (head.x < 0 || head.y < 0 || head.x >= rows || head.y >= cols) {
        endGame();
        return;
    }

    // Food collision
    if (head.x === food.x && head.y === food.y) {
        snake.unshift(head);
        blocks[`${food.x}-${food.y}`].classList.remove("food");

        food = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };

        score += 10;
        scoreElement.textContent = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
            highScoreElement.textContent = highScore;
        }
    } else {
        snake.unshift(head);
        snake.pop();
    }

    // Clear board
    Object.values(blocks).forEach(block => {
        block.classList.remove("fill", "food");
    });

    // Draw food
    blocks[`${food.x}-${food.y}`].classList.add("food");

    // Draw snake
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });
}

function startGame() {
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    intervalId = setInterval(render, 300);

    timerIntervalId = setInterval(() => {
        let [min, sec] = time.split("-").map(Number);
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        time = `${min}-${sec}`;
        timeElement.textContent = time;
    }, 1000);
}

function endGame() {
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    modal.style.display = "flex";
    startGameModel.style.display = "none";
    gameOverModel.style.display = "flex";
}

function restartGame() {
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    // Clear board
    Object.values(blocks).forEach(block => {
        block.classList.remove("fill", "food");
    });

    score = 0;
    time = "00-00";
    direction = "right";

    scoreElement.textContent = score;
    timeElement.textContent = time;

    snake = [{ x: 1, y: 3 }];

    food = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols)
    };

    modal.style.display = "none";
    startGame();
}

/* Event Listeners */
startButton.addEventListener("click", () => {
    modal.style.display = "none";
    startGame();
});

restartButton.addEventListener("click", restartGame);

addEventListener("keydown", event => {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    else if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    else if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    else if (event.key === "ArrowRight" && direction !== "left") direction = "right";
});
