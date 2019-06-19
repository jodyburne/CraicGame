class Background {
constructor() {
    
    this.y = 0
  this.vy = 3
    this.img = new Image()
    this.img.src = "https://static.vecteezy.com/system/resources/previews/000/265/323/non_2x/seamless-clouds-on-blue-sky-background-vector.jpg"
    
}
draw(ctx) {
  ctx.drawImage(this.img, 0, this.y, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(this.img, 0, this.y + CANVAS_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT)
}

update() {
    this.y -= speedRatio * this.vy
    if (this.y < -CANVAS_HEIGHT) this.y = 0
 }
}

