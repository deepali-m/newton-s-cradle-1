class Chain {
     constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

         var Chainoptions ={
             bodyA:body1,
             bodyB:body2,
             pointB:{x:this.offsetX, y:this.offsetY}
         }
        
        this.chain = Constraint.create(Chainoptions);
        World.add(world,this.chain);
        
     
        }

    display(){

        
          
        console.log("hi")
        stroke("black")
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(5);   
        var Anchor1X= pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB + this.offsetX
        var Anchor2Y = pointB + this.offsetY

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        console.log(Anchor1X)
        console.log(Anchor1Y)
        console.log(Anchor2X)
        console.log(Anchor2Y)
        line(289,250,329,251)
        
    }   
};