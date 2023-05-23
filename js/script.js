//titulo
var canvas = document.getElementById("UgCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="#227bb5";
ctx.font = "italic 40pt arial";
ctx.fillText("Teste de elelmentos do canva", 100, 100);

//retangulo
ctx.fillStyle="#227bb5";
ctx.fillRect(50,150,250,150);

//circulo
ctx.fillStyle="#227bb5";
ctx.beginPath();
ctx.arc(450,250,80,100,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//curva
ctx.beginPath();
ctx.moveTo(600,350);
ctx.quadraticCurveTo(800,170,770,320);
ctx.stroke();

//linha
ctx.moveTo(600,250);
ctx.lineTo(650,150);
ctx.lineTo(750,200);
ctx.stroke();

//imagem
var img=new Image();
img.onload = function(){
ctx.drawImage(img,150,450);
};
img.src="img/img.png"; 
