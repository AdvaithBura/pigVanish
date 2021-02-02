class Slingshot{
    constructor(bodyA,pointB, pointC){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            pointC : pointC,
            stiffness : 0.1,
            length : 50
        }
    
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
}
fly(){
    this.chain.bodyA = null;
  //  this.chain.pointB = null;
}
draw() {
    strokeWeight(10);
    if(this.chain.bodyA){
        stroke(48,22,8);
        
    line(this.chain.bodyA.position.x+10, this.chain.bodyA.position.y+10, this.chain.pointB.x, this.chain.pointB.y);
    line(this.chain.bodyA.position.x-20, this.chain.bodyA.position.y-10, this.chain.pointC.x, this.chain.pointC.y);
    image(this.sling3, this.chain.bodyA.position.x-30,this.chain.bodyA.position.y-10, 10,20);
    }
    image(this.sling1,250,100);
    image(this.sling2,220,95);
}

attach(body){
    this.chain.bodyA = body;
}
}

