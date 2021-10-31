let n;
let m;
let arra;
let arrb;
let count;
function setup() {
   let canvas = createCanvas(480,480);
   canvas.parent("canvas-div");
   n = 3;
   m = 3;
   arra = new Array();
   arrb = new Array();
   for(let i=0;i<n;i++){
      arra.push(int(random(0, width/2)));
      arrb.push(-1);
   }

   for(let i=0;i<m;i++){
      arra.push(-1*int(random(0, width/2)));
      arrb.push(1);
   }
   count = 0;
}
function draw(){
   background(0);
   translate(height/2, width/2);
   stroke(1);
   stroke(0, 230, 220, 1);
   fill(0, 255, 0);
   line(-height/2, 0, height/2, 0);
   for(let i=0;i<n+m;i++){
      ellipse(arra[i], 0, 10, 10);
   }
   for(let i=0;i<n+m;i++){
      for(let j=i+1;j<n+m;j++){
         
         if(arra[i]==arra[j]){

            arrb[i]*= -1;
            arrb[j]*= -1;
            //count = 1;
            console.log(count);
         }
      }
   }
   for(let i=0;i<n+m;i++)
      arra[i] += 1*arrb[i];
   //console.log(count);
   
}
