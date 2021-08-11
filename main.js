function Preload() {
}
function setup() {
   canvas= createCanvas(640,480);
   
     video= createCapture(VIDEO);
   video.hide();
   canvas.center();
 
}

function draw() {

  image(video,230,150,220,200);
  fill(250,0,0);
 stroke(250,0,0);
 circle(170,105,80,) ;
 
  fill(250,0,0);
 stroke(250,0,0);
 circle(180,390,80,) ;
 
  fill(250,0,0);
 stroke(250,0,0);
 circle(515,110,80,) ;

  fill(250,0,0);
 stroke(250,0,0);
 circle(515,390,80,) ;
 
 fill(255,255,255);
 stroke(238,157,45);
 rect(190,110,310,280) ;
 canvas.center();
}


