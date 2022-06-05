class Chao{
    constructor(x,y,l,h){

        var options={
			isStatic:true			
			}

        this.x = x
        this.y = y
        this.l = l
        this.h = h
        this.body = Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
    }
    display()
    {

        var chaoPos=this.body.position;		

        push()
        translate(chaoPos.x, chaoPos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,255,0)
        rect(0,0,this.w, this.h);
        pop()

}

} 