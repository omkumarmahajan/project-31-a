class particle{
    constructor (x,y,radius){
    var options ={
    
        isStatic : true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    
    World.add(world,this.body);
    
    }
    display(){
    var position = this.body.position;
    sphere(Radius);
    fill("white")
    rect(pos.x,pos.y,this.radius);
    }
    }