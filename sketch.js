var diam1=50;
var r,g,b;
var x;
var y;

function setup(){
    createCanvas(500,500);
    r = random(255);
    g = random(255);
    b = random(255);
    x=width/2;
    y=height/2;
}

function draw(){
    background("orange");
    fill(r,g,b);
    stroke("white")
    strokeWeight(5);
    ellipse(x,y,diam1,diam1);
    textSize(30);
    fill("black")
    text("CLICK IT. NOW.", r, g, b);
    //ellipse(random(width),random(height),random(100),random(100));
    
}
function mousePressed(){

    r = random(255);
    g = random(255);
    b = random(255);
    x=random(width-10) + 10;
    y=random(height);
        
   
}

