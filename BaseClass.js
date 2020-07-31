class BaseClass{
    constructor(x, y){
        var options = {
            density:1.0,
            isStatic:false,
            friction:0.1
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options)
        this.width = 30;
        this.height = 30;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke(0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}