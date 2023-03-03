class Bala{

    //Función que construye nuestro objeto
    constructor(x,y){
        
        var options={
            isStatic:true
        }

        this.r = 30;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image= loadImage("./imagenes/cannonball.png");
        World.add(world, this.body);

    }

    display(){
        var pos= this.body.position;
        push ();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }
}