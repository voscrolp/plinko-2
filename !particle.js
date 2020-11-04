class Particle{
    constructor(x,y,radius){
        var options = {
            restitution:0.4,
            density:1
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
    if(this.body){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill(this.color);
        circle(0,0,this.radius);
        pop();
    }
}

    score(){
        if(this.body.position.y > 550){
            if(this.body.position.x < 320 && this.body.position.x > 0){
                score = score + 500;
            }

            if(this.body.position.x < 560 && this.body.position.x > 320){
                score = score + 100;
            }

            if(this.body.position.x < 800 && this.body.position.x > 560){
                score = score + 200;
            }

            this.body.position.x = 3000;
        }
    }
}