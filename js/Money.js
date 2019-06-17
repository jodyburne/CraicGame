class Money {
    constructor(){
        this.radius = 27
        this.x = Math.floor((Math.random() * 350) + 200)
        this.y = 900
        this.img = new Image()
        this.img.src = "/images/coinMaybs1.gif"
    }
    draw(ctx) {
        ctx.save()
        ctx.beginPath();
        ctx.globalAlpha = 0.5
        ctx.fillStyle = "green"
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.restore()

        ctx.save()
        ctx.drawImage(this.img, this.x - (this.radius * 2.8), this.y - (this.radius * 2.8), 150, 150)
        ctx.translate(this.x, this.y)
        ctx.restore()
    }
}

