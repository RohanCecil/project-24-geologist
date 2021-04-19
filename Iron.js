class Iron{
    constructor(x,y,width,height){
        {  var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        // assign options to the rubber ball
            this.x=x;
            this.y=y;
            this.width=width;
            this.height=height;
            this.body=Bodies.rectangle(this.x, this.y,this.width,this.height , options)
            World.add(world, this.body);
    
        }
        display()
        {
                var rubberpos=this.body.position;		
                push()
                translate(rubberpos.x, rubberpos.y);
                rectMode(CENTER)
                strokeWeight(4);
                stroke("black");
                fill("darkblue");
                    
                pop()