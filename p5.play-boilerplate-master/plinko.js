class plinko{
    constructor (x,y,radius){
    var options ={
    
        isStatic : true
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.r = radius;
    
    World.add(world,this.body);
    
    }
    display(){
    var position = this.body.position;
    sphere(Radius);

    this.body = Bodies.circle(x,y,this.r,options);
    this.color=color(random(0,255),random(0,255),random(0,255))   
    World.add(world,this.body)
    fill("white")
    rect(pos.x,pos.y,this.radius);
    }
    }