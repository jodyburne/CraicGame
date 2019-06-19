
class PointSpecial{
    constructor(){
        this.radius = 30
        this.x = [225, 295, 365, 435, 505, 575][Math.floor(Math.random() * 7)] 
        this.y = 1200
        this.vy = 10
        this.img = new Image()
        this.img.src = "images/clover.png" 
    }

    draw(ctx) {
        ctx.save()
        ctx.beginPath();
        ctx.globalAlpha = 0
        ctx.fillStyle = "green"
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.restore()

        ctx.save()
        ctx.drawImage(this.img, this.x - (this.radius * 1.65), this.y - (this.radius * 1.6) , 100, 100)
        ctx.translate(this.x, this.y)
        ctx.restore()
    }
    update() {
       
 this.y -= speedRatio * this.vy;
}
}