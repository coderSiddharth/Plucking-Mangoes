class Mango{

constructor(x,y,r){

var options = {

isStatic:true,
friction:1,
restitution:0

}

this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("mango.png")
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)
}

display(){


var pos =this.body.position;
push();

translate(pos.x,pos.y);

imageMode(CENTER);


image(this.image, 0,0, 50, 50);
pop();
}

}