// ==============================
// ! GLOBAL VARIABLES
// ==============================

const board = document.querySelector(".board");
const modal = document.querySelector(".modal");

let startBtn = document.querySelector(".start-btn");
let startGame = document.querySelector(".start-game");
let restartBtn = document.querySelector(".restart-btn");
let restartGame = document.querySelector(".restart-game");

let scoreEl = document.querySelector("#score");
let highScoreEl = document.querySelector("#high-score");
let timeEl = document.querySelector("#time");

const colHeight = 50;
const colWidth = 50;

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
highScoreEl.textContent = highScore;

let time = `00-00`;
let timerIntervalId = null;

let cols = Math.floor(board.clientWidth / colWidth);
let rows = Math.floor(board.clientHeight / colHeight);

let blocks = [];




// ==============================
// ! SNAKE INITIAL SETUP
// ==============================

let snake = [{ x: 1, y: 8 }];

let direction = "down";

let intervalId = null;


// ==============================
// ! FOOD INITIAL POSITION
// ==============================

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};


// ==============================
// ! CREATE GRID BLOCKS
// ==============================

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let block = document.createElement("div");

    block.classList.add("block");

    // block.textContent = `${row}-${col}`;

    board.appendChild(block);

    blocks[`${row}-${col}`] = block;
  }
}


// ==============================
// ! RENDER / GAME LOOP FUNCTION
// ==============================

function render() {
  let head = null;

  // Add food class on food position
  blocks[`${food.x}-${food.y}`].classList.add("food");


  // ==============================
  // ^ UPDATE HEAD POSITION
  // ==============================

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }


  // ==============================
  // ^ REMOVE OLD SNAKE FILL
  // ==============================

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });


  // ==============================
  // ^ MOVE SNAKE
  // ==============================

  snake.unshift(head);
  snake.pop();


  // ==============================
  // ^ WALL COLLISION / GAME OVER
  // ==============================

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);

    modal.style.display = "flex";
    startGame.style.display = "none";
    restartGame.style.display = "flex";
  }


  // ==============================
  // ^ FOOD CONSUME LOGIC
  // ==============================

  if (food.x === head.x && food.y === head.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");

    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    blocks[`${food.x}-${food.y}`].classList.add("food");

    snake.unshift(head);

    score += 1;
    scoreEl.textContent = score;

    


    // ==============================
    // ^ HIGH SCORE UPDATE
    // ==============================

    if (highScore < score) {
      highScore = score;

      localStorage.setItem("highScore", highScore);

      highScoreEl.textContent = highScore;
    }
  }


  // ==============================
  // ^ ADD NEW SNAKE FILL
  // ==============================

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}


// ==============================
// ! START GAME INTERVAL
// ==============================

intervalId = setInterval(() => {
  render();
}, 300);


// ==============================
// ! TIMER FUNCTION
// ==============================

function timerwala() {
  clearInterval(timerIntervalId);

  timerIntervalId = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);

    if (sec === 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }

    time = `${min}-${sec}`;
    timeEl.textContent = time;
  }, 1000);
}


// ==============================
// ! START BUTTON
// ==============================

startBtn.addEventListener("click", () => {
  modal.style.display = "none";

  timerwala();
});


// ==============================
// ! RESTART BUTTON
// ==============================

restartBtn.addEventListener("click", restart);

function restart() {
  clearInterval(intervalId);
  clearInterval(timerIntervalId);


  // Reset timer
  time = "00-00";
  timeEl.textContent = time;
  timerwala();


  // Remove old food
  blocks[`${food.x}-${food.y}`].classList.remove("food");


  // Remove old snake
  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`]?.classList.remove("fill");
  });


  // Reset values
  direction = "down";
  modal.style.display = "none";

  snake = [{ x: 1, y: 8 }];

  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };


  // Restart game interval
  intervalId = setInterval(() => {
    render();
  }, 300);


  // Reset score
  score = 0;
  scoreEl.textContent = score;
}


// ==============================
// ! KEYBOARD CONTROLS
// ==============================

addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    direction = "up";
  } else if (event.key === "ArrowDown") {
    direction = "down";
  } else if (event.key === "ArrowRight") {
    direction = "right";
  } else if (event.key === "ArrowLeft") {
    direction = "left";
  }
});