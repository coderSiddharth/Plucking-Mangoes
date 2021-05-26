class Tree {

constructor(x,y,w,h){

var options = {

isStatic:true

}

this.x=x;
this.y=y;
this.h=h;
this.w=w;
this.image=loadImage("tree.png")
this.body=Bodies.rectangle(x,y,w,h,options)


}

display(){

image(this.image,this.x,this.y,this.w,this.h);

}

}