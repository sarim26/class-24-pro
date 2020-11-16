class Dustbin{
constructor(x,y,width,height){

var options={
isStatic : true,
restitution : 0,
friction:0.5,
        density:1.2
}

this.x=x
this.y=y
this.width=width
this.height=height
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
World.add(world,this.body);
}
display(){

    edge1=createSprite(480,650,200,20)
    edge2=createSprite(380,620,20,100)
    edge3=createSprite(580,620,20,100)
    
    edge1.shapeColor=("red")
    edge2.shapeColor=("red")
    edge3.shapeColor=("red")


}


}