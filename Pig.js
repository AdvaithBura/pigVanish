class Pig extends BaseClass{
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      this.alpha = 255;
    }

    display(){
      var score = 0;
      if(this.body.speed > 3){
        World.remove(world, this.body);
        push();
        this.alpha= this.alpha-5;
        tint(255,this.alpha);
       image(this.image, this.body.position.x, this.body.position.y,50,50);
       var score = score +50;
       text("Score:"+score,150,50);
       pop();
      } else {
        super.display();
      }
      console.log(score);
    }
  };
  