class Character{
    constructor(){
        this.radius = 50
        this.x = (CANVAS_WIDTH / 2) 
        this.y = (CANVAS_HEIGHT / 4) 
        this.img = new Image()
        this.img.src = "http://pixeljoint.com/files/icons/leprechaun.gif"
        this.score = 0
    }

    draw(ctx) {
        ctx.save()
        ctx.beginPath()
        ctx.globalAlpha = "0"
        ctx.fillStyle = "blue"
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fill()        
        ctx.restore()

        ctx.save()
        ctx.drawImage(this.img, this.x - (this.radius * 1.5), this.y - (this.radius * 1.85), 144, 144)
        ctx.translate(this.x, this.y)
        ctx.restore()
    }
}