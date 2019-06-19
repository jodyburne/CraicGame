class Character {
  constructor() {
    this.radius = 40;
    this.x = CANVAS_WIDTH / 2;
    this.y = CANVAS_HEIGHT / 8;
    this.img = new Image();
    this.img.src = "images/leprechaun.png";
    this.score = 0;
    this.isGoingLeft = false;
    this.isGoingRight = false;
    this.isGoingUp = false;
    this.isGoingDown = false;    
    this.isDrunk = false;
    this.drunkDelta = 0;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0;
    ctx.fillStyle = "blue";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(this.x, this.y);
    let ratio = 1.3;
    ctx.drawImage(
      this.img,
      -ratio * this.radius,
      -ratio * this.radius,
      2 * ratio * this.radius,
      2 * ratio * this.radius
    );
    ctx.restore();
  }
  update() {
    if (this.isGoingLeft) {
      this.x -= 8;
    }
    if (this.isGoingRight) {
      this.x += 8;
    }
    if (this.isGoingUp) {
        this.y -= 4;
      }
    if (this.isGoingDown) {
        this.y += 12;
      }
    if (this.isDrunk) {
      this.drunkDelta += 2 * (Math.random() - 0.5);
      if (this.drunkDelta > 5) this.drunkDelta = 5;
      if (this.drunkDelta < -5) this.drunkDelta = -5;
      this.x += this.drunkDelta;
    }

    // Border limit
    if (this.x - this.radius < 0) this.x = this.radius;
    if (this.x + this.radius > CANVAS_WIDTH)
      this.x = CANVAS_WIDTH - this.radius;
    if (this.y - this.radius < 0) this.y = this.radius;
    if (this.y + this.radius > CANVAS_HEIGHT)
        this.y = CANVAS_HEIGHT - this.radius;
  }
}
