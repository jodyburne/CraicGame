class SlowMo {
    constructor() {
        this.radius = 30
        this.x = Math.floor((Math.random() * 350) + 200) 
        this.y = 900 
        this.img = new Image()
        this.img.src = "/images/guinness1.png"
    }

    draw(ctx) {
        ctx.save()
        
        ctx.beginPath();
        ctx.globalAlpha = 0.5
        ctx.fillStyle = "red"

        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.restore()

        ctx.save()
        ctx.drawImage(this.img, this.x - (this.radius), this.y - (this.radius) , 60, 60)
        ctx.translate(this.x, this.y)
        
        
        ctx.restore()
    }

}