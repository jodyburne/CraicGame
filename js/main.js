
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
let moneyArr = [];
let obstacleArr = [];
let slowMoArr = [];
let pointSpecialArr = [];

let isGameOver = false;
let speedRatio = 1;
let bg = new Background();
let leprechaun = new Character();

let gameOverScreen = new Image();
gameOverScreen.src = "images/keane1.jpg";
let homepageScreen = new Image();
homepageScreen.src = "images/keane happy.jpg";

let screen = "home";
let frame = 0;
const FRAMES_BETWEEN_MONEY = 121;
const FRAMES_BETWEEN_OBSTACLE = 189;
const FRAMES_BETWEEN_SLOWMO = 977;
const FRAMES_BETWEEN_POINT_SPECIAL = 500;

function drawEverything(ctx) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  bg.draw(ctx);
  drawRb(ctx);
  leprechaun.draw(ctx);
  for (let i = 0; i < moneyArr.length; i++) {
    moneyArr[i].draw(ctx);
  }
  for (let i = 0; i < obstacleArr.length; i++) {
    obstacleArr[i].draw(ctx);
  }
  for (let i = 0; i < slowMoArr.length; i++) {
    slowMoArr[i].draw(ctx);
  }
  for (let i = 0; i < pointSpecialArr.length; i++) {
    pointSpecialArr[i].draw(ctx);
  }
  drawScore();
}

function updateEverything() {
  if (!isGameOver) {
    frame++;
    speedRatio += 0.0002;
    moveMoney();
    moveObstacle();
    moveSlowMo();
    movePointSpecial();
    bg.update();
    leprechaun.update();
    removeUselessItems()
  }
}

function animation() {
  if (screen === "home") {
    drawHomepage(ctx);
    //  window.requestAnimationFrame(animation);
  }
  if (screen === "game") {
    updateEverything();
    drawEverything(ctx);
    //window.requestAnimationFrame(animation);
  }
  if (screen === "over") {
    drawGameOver(ctx);
    //window.requestAnimationFrame(animation);
  }
  window.requestAnimationFrame(animation);
}
animation();


function checkCollisionPoints(coin) {
  if (
    Math.sqrt((coin.x - leprechaun.x) ** 2 + (coin.y - leprechaun.y) ** 2) <
    leprechaun.radius + coin.radius
  ) {
    console.log("collision");
    return true;
  }
}

function checkCollisionPint(guinness) {
  if (
    Math.sqrt(
      (guinness.x - leprechaun.x) ** 2 + (guinness.y - leprechaun.y) ** 2
    ) <
    leprechaun.radius + guinness.radius
  ) {
    console.log("collision");
    return true;
  }
}

function checkCollisionDeath(snake) {
  if (
    Math.sqrt((snake.x - leprechaun.x) ** 2 + (snake.y - leprechaun.y) ** 2) <
    leprechaun.radius + snake.radius
  ) {
    console.log("collision");
    return true;
  }
}

function checkCollisionPointsSpecial(clover) {
  if (
    Math.sqrt((clover.x - leprechaun.x) ** 2 + (clover.y - leprechaun.y) ** 2) <
    leprechaun.radius + clover.radius
  ) {
    console.log("collision");
    return true;
  }
}

function moveMoney() {
  if (frame % FRAMES_BETWEEN_MONEY === 0) {
    moneyArr.push(new Money());
  }
  for (let j = 0; j < moneyArr.length; j++) {
    moneyArr[j].update();
    if (checkCollisionPoints(moneyArr[j])) {
      leprechaun.score += 1;
      moneyArr.splice(j, 1);
    }
  }
}

function moveObstacle() {
  if (frame % FRAMES_BETWEEN_OBSTACLE === 0) {
    obstacleArr.push(new Obstacle());
  }
  for (let j = 0; j < obstacleArr.length; j++) {
    obstacleArr[j].update();
    if (checkCollisionDeath(obstacleArr[j])) {
      // screen = 'over'
      isGameOver = true;
      setTimeout(() => {
        screen = "over";
      }, 2000);
    }
  }
}

function moveSlowMo() {
  if (frame % FRAMES_BETWEEN_SLOWMO === 0) {
    slowMoArr.push(new SlowMo());
  }
  for (let j = 0; j < slowMoArr.length; j++) {
    slowMoArr[j].update();
    if (checkCollisionPint(slowMoArr[j])) {
      slowMoArr.splice(j, 1);
      speedRatio /= 2;
      leprechaun.isDrunk = true;
      setTimeout(() => {
        speedRatio *= 2;
        leprechaun.isDrunk = false;
      }, 10000);
    }
  }
}

function movePointSpecial() {
  if (frame % FRAMES_BETWEEN_POINT_SPECIAL === 0) {
    pointSpecialArr.push(new PointSpecial());
  }
  for (let j = 0; j < pointSpecialArr.length; j++) {
    pointSpecialArr[j].update();
    if (checkCollisionPointsSpecial(pointSpecialArr[j])) {
      leprechaun.score += 4;
      pointSpecialArr.splice(j, 1);
    }
  }
}

function removeUselessItems() {
  if (moneyArr.length > 10)
  moneyArr.splice(0, 1)

  if (obstacleArr.length > 10)
  obstacleArr.splice(0, 1)
  

  if (pointSpecialArr.length > 10)
  pointSpecialArr.splice(0, 1)

  if (slowMoArr.length > 10)
  slowMoArr.splice(0, 1)

  // for (let i = 0; i <obstacleArr.length; i++) {
  //   if (obstacleArr[i]. x === 0 && obstacleArr[i].y === 0) {
  //     obstacleArr.splice(i, 1)
  //     console.log('it happened')}
  //       else{console.log("negative")}

  //   }
  
}

function drawScore() {
  ctx.save();
  ctx.font = "40px Arial bold";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + leprechaun.score, 600, 50);
  ctx.restore();
}

function drawGameOver(ctx) {
  ctx.save();
  ctx.drawImage(gameOverScreen, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.font = "40px Arial bold";
  ctx.fillStyle = "green";
  ctx.fillText("Game Over", 200, 50);
  ctx.fillText(
    "You scored " + leprechaun.score + "! You're a disgrace.",
    200,
    100
  );
  ctx.fillText("Press enter to try again.", 250, 150);
  ctx.restore();
}

function drawHomepage(ctx) {
  ctx.save();
  ctx.drawImage(homepageScreen, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.restore();
}

function resetGame() {
  if (screen !== "game") {
    screen = "game";
    leprechaun = new Character();
    bg = new Background();
    frame = 0;
    moneyArr = [];
    obstacleArr = [];
    slowMoArr = [];
    pointSpecialArr = [];
    speedRatio = 1;
    isGameOver = false;
  }
}



document.onkeydown = event => {
  if (event.keyCode === 13 && (screen === "home" || screen === "over")) {
    resetGame();

    console.log(screen);
  }

  if (event.keyCode === 37) {
    leprechaun.isGoingLeft = true;
    
  }
  
  if (event.keyCode === 39) {
    leprechaun.isGoingRight = true;
    
  }
  if (event.keyCode === 38) {
    leprechaun.isGoingUp = true  }
  
  if (event.keyCode === 40) {
    leprechaun.isGoingDown = true;
    
  }
};

document.onkeyup = event => {
  if (event.keyCode === 37) {
    leprechaun.isGoingLeft = false;
  }
  if (event.keyCode === 39) {
    leprechaun.isGoingRight = false;
  }
  if (event.keyCode === 38) {
    leprechaun.isGoingUp = false;
  }
  
  if (event.keyCode === 40) {
    leprechaun.isGoingDown = false;
    ;
  }
};

canvas.onclick = resetGame

window.addEventListener('deviceorientation', event => {
  leprechaun.x += event.gamma
});
