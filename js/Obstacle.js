class Obstacle {
    constructor(){
        this.x = Math.floor((Math.random() * 350) + 200)
        this.y = 900
        this.img = new Image()
        this.img.src = "/images/poss-snake1.png"
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, 70, 70)
    }
}