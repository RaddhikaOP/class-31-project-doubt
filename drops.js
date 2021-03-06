class Rain 
{
    constructor(x,y,)
    {
        var options = {
            restitution :0,
            friction : 0.3,
            density :1.0
            
        };
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
       
        World.add(world, this.body);
        
    }

    display()
    {
         pos(); 
        fill("blue")
        ellipseMode(RADIUS);
        
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
};

function pos(){
    if (this.body.positionj.y>height){
    Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,300)})
}
}