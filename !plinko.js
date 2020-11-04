class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill(255);
        circle(this.body.position.x,this.body.position.y,this.radius);
        pop();  
    }
}