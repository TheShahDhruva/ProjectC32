class ground{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 1500,20, {isStatic:true, friction:1})
        this.width = 1500;
        this.height = 20;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push();
        rectMode(CENTER);
        fill(50, 80, 100)
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}