var turn=0
function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("purple");
    fill("#404040");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("yellow");
    textSize(18);
    text("TIC TAC TOE", width / 2, 33);
    fill("green");
}


function draw()
{

 createRow(100)
 createRow(200)
 createRow(300)  
}

function createRow(y)
{
  for (x = 450; x < 750; x=x+100)
   {
       var b1= new Box(x,y,100,100); 
       b1.appear();   
   }  
}