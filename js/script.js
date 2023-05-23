//base
var canvas = document.getElementById("UgCanvas");
var ctx = canvas.getContext("2d");

//ceu
ctx.fillStyle="#2e2e2e";
ctx.fillRect(0,0,1080,720);





/*//curva
ctx.beginPath();
ctx.moveTo(0,120);
ctx.quadraticCurveTo(100,-1,420,0);
ctx.quadraticCurveTo(500,20,650,150);
ctx.quadraticCurveTo(1500,800,1000,100);
ctx.stroke();*/

//montanha 1
ctx.fillStyle="#ffffff";
ctx.moveTo(0,330);
ctx.lineTo(80,280);
ctx.lineTo(160,200);
ctx.lineTo(260,180);
ctx.lineTo(290,200);
ctx.lineTo(340,310);
ctx.lineTo(480,400);
ctx.lineTo(0,400);
ctx.lineTo(0,330);
ctx.stroke();

//montanha 2
ctx.moveTo(150,400);
ctx.lineTo(480,260);
ctx.lineTo(540,150);
ctx.lineTo(620,120);
ctx.lineTo(670,260);
ctx.lineTo(1000,400);
ctx.stroke();

//montanha 3
ctx.moveTo(670,400);
ctx.lineTo(800,260);
ctx.lineTo(890,240);
ctx.lineTo(925,210);
ctx.lineTo(1020,320);
ctx.lineTo(1080,340);
ctx.stroke();

//chao
ctx.fillStyle="#e0e0e0";
ctx.fillRect(0,400,1080,320);

/*//circulo
ctx.fillStyle="#227bb5";
ctx.beginPath();
ctx.arc(450,250,80,100,Math.PI*2,true);
ctx.closePath();
ctx.fill();*/

//https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes