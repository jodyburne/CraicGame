const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height

let bg = new Background()
let leprechaun = new Character()
let coin = new Money()
let snake = new Obstacle()
let guinness = new SlowMo()

function drawEverything() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    bg.draw(ctx)
    drawRb(ctx)
    leprechaun.draw(ctx)
    coin.draw(ctx)
    snake.draw(ctx)
    guinness.draw(ctx)
    
}

function animation() {
    bg.update();
    checkCollision()
    drawEverything(ctx);
    
    window.requestAnimationFrame(animation);
   
  }
  animation()

  document.onkeydown = event => {
    console.log(event.keyCode);
    // left
    if (event.keyCode === 37) {
      leprechaun.x -= 50;
      if (leprechaun.x < 0) {
        leprechaun.x = 0 
    } }
    // right
    if (event.keyCode === 39) {
      leprechaun.x += 50;
      if (leprechaun.x > 800) {
        leprechaun.x = 800 
      }
    }
    if (event.keyCode === 38) {
      leprechaun.y -= 5;
    } if (leprechaun.y < 0) {
        leprechaun.y = 0 
    }
    //
    if (event.keyCode === 40) {
      leprechaun.y += 100;
        if (leprechaun.y > 1000) {
            leprechaun.y = 1000 
        }

    }
  };
  
  document.onkeyup = event => {
    console.log(event.keyCode);
    // left
    if (event.keyCode === 37) {
      leprechaun.x += 0;
    }
    // right
    if (event.keyCode === 39) {
      leprechaun.x += 0;
    }
    if (event.keyCode === 38) {
      leprechaun.y += 0;
    }
    //
    if (event.keyCode === 40) {
      leprechaun.y += 0;
    }
  };


//   var dx = coin.x - leprechaun.x
//   var dy = coin.y - leprechaun.y
//   var distance = Math.sqrt(dx * dx + dy * dy);
  
//   if (distance < leprechaun.radius + coin.radius) {
//        console.log("collision")
//   }
  
function checkCollision() {  
if ((Math.sqrt(( coin.x - leprechaun.x) ** 2 + (coin.y - leprechaun.y) ** 2)) < leprechaun.radius + coin.radius) {
    console.log('collision')
}}