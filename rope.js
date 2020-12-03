class Rope {

    constructor(body1,body2,offsetX,offsetY){
       this.offsetX = offsetX;
       this.offsetY = offsetY; 
        var options ={
           length:200,
           stiffness:0.1, 
           bodyA:body1,
           bodyB:body2,
           pointB:{x: this.offsetX, y: this.offsetY}
       }
     this.chain = Constraint.create(options);
     World.add(world,this.chain);
   }

    display(){
      var p1 = this.chain.bodyA.position;
      var p2 = this.chain.bodyB.position;
      stroke("blue");
      strokeWeight(3);
      line(p1.x,p1.y,p2.x+this.offsetX,p2.y+this.offsetY);
  
  
    }
  
  
}