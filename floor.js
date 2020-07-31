class floor{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 240,15, {isStatic:true, friction:0.3});
        this.width = 240;
        this.height = 15;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}