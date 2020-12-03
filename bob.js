class Bob {

    constructor(x,y,radius){
  
      var options = {
          density:1.2,
          restitution:1,
          friction:0.5,
          isStatic:false
      }
  
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
    }
  
  
    display(){
     
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        stroke("blue");
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
  
  }
  
          