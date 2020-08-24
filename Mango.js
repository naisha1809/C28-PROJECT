class mango{
  
    constructor(x,y,radius) { 
      var options = {
        isStatic : true,
        'restitution':0,
        'friction':1,
      
      }
  
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
      
     
      display () {
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill("purple");
        imageMode(RADIUS);
        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);
        pop();
      
    }
  }