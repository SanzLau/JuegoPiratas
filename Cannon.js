class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;
        this.canon_arriba= loadImage("./imagenes/canon.png");
        this.canon_abajo = loadImage("./imagenes/cannonBase.png")
    }

    display(){
        //Parte superior del cañon
        push();
        imageMode(CENTER);
        image(this.canon_arriba,this.x,this.y,this.width,this.height);
        pop();

        //Parte inferior
        image(this.canon_abajo,70,20,200,200);
        noFill();
        
    }
    
}