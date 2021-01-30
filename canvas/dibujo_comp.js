var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var fondo =  "#9900cc";
var figura = "#00cc00";

//fondo
<code>
for (x=0;x<=max;x+=inc)
{
  dLine("red", 0,0+x,10+x,400);
}
for (x=0;x<=max;x+=inc)
{
  dLine("blue", 0+x,0,400,10+x);
}
for (x=0;x<=max;x+=inc)
{
  dLine("green", 0+x,400,400,400-x);
}
for (x=0;x<=max;x+=inc)
{
  dLine("yellow", 400-x,0,0,0+x);
}

//borde figura
dibujarLinea(figura, 150, 0, 150, 150);
dibujarLinea(figura, 150, 150, 300, 150);
dibujarLinea(figura, 150, 150, 0, 150);
//borde fondo
dibujarLinea(fondo, 1, 1, 1, 299);
dibujarLinea(fondo, 1, 299, 299, 299);
dibujarLinea(fondo, 1, 1, 299, 1);
dibujarLinea(fondo, 299, 1, 299, 299);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
