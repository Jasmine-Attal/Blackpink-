class Jennie {

    constructor(x, y, width, height) {

        var options={
          restitution : 0.7,
          friction : 0.6,
          isStatic : false
        }
          this.image = loadImage("bp.jfif")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }

      display() {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image ,this.body.position.x,this.body.position.y);
        rect(0, 0, this.width, this.height);
        pop();

      }
      
}
