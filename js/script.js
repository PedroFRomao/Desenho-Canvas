//base
var canvas = document.getElementById("UgCanvas");
var ctx = canvas.getContext("2d");

//ceu
ctx.fillStyle="#2e2e2e";
ctx.fillRect(0,0,1080,720);

//chao
ctx.fillStyle="#e0e0e0";
ctx.fillRect(0,400,1080,320);

/*//circulo
ctx.fillStyle="#227bb5";
ctx.beginPath();
ctx.arc(450,250,80,100,Math.PI*2,true);
ctx.closePath();
ctx.fill();*/

//curva
ctx.beginPath();
ctx.moveTo(0,120);
ctx.quadraticCurveTo(100,-1,420,0);
ctx.quadraticCurveTo(500,20,650,150);
ctx.quadraticCurveTo(1500,800,1000,100);
ctx.stroke();

/*//linha
ctx.moveTo(600,250);
ctx.lineTo(650,150);
ctx.lineTo(750,200);
ctx.stroke();*/
