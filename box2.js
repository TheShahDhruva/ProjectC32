class box2 extends BaseClass{
    constructor(x, y){
        super(x, y);
        this.Visibility = 255;
    }
    display(){
        fill(90, 80, 100);
        if(this.body.speed < 7){
            
            super.display();
            }
            else{
                World.remove(world, this.body);
                push();
                this.Visibility-=5;
                tint(255, this.Visibility);
                rect(this.body.x, this.body.y, 30, 30);
                pop();
            }
    }
    scores(){
        if(this.Visibility <= 0 && this.Visibility > -105){
            score++;
        }
    }
}
