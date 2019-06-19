class Obstacle {
  constructor() {
    this.radius = 20 + 10 * Math.random();
    this.x = [225, 295, 365, 435, 505, 575][Math.floor(Math.random() * 7)];
    this.y = 1200;
    this.vy = 10;
    this.img = new Image();
    this.img.src = "/images/snake-3.png";
  }
  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0;
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(this.x, this.y);
    let ratio = 1.5;
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
    this.y -= speedRatio * this.vy;
  }
}
