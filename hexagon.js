class hexagon{
    constructor(x,y){
        var options = {
            density: 2.0,
            restitution: 0.3,
            friction: 0.9
        }
        this.body = Bodies.polygon(x, y, 6, 28, options);
        this.radius = 28;
        this.image = loadImage("images.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, 80, 80);
        pop();
    }
}