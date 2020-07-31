class box1 extends BaseClass{
    constructor(x, y){
        super(x, y);
        this.Visiblity = 255;   
    }
    display(){
        fill(100,80,90);
        if(this.body.speed < 7){
        super.display();
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity-=5;
            tint(255, this.Visiblity);
            rect(this.body.x, this.body.y, 30, 30);
            pop();
            }
        }
    scores(){
        if(this.Visiblity < 0 && this.Visiblity >= -105){
            score++;
        }
    }
}