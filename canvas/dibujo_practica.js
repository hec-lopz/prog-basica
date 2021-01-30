var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var fondo =  "#9900cc";
var figura = "#00cc00";

//fondo
for(l=0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l+1)
  dibujarLinea(fondo, 0, yi, xf,300);
  console.log("Linea " + l)
}

for(l=0; l < lineas; l++)
{
    yi = 300 - (10 * l);
    xf = 300 - (10 * (l+1));
    dibujarLinea(fondo, 300, yi, xf, 0);
    console.log("Linea " + l)
}

//figura
for(l=0; l < 30; l++)
{
    yi = 5 * l;
    xf = 150 + (5 * (l+1));
    dibujarLinea(figura, 150, yi, xf, 150);
    console.log("Linea " + l)
}

for(l=0; l < 30; l++)
{
    yi = (5 * l);
    xf = 150 - (5 * (l+1));
    dibujarLinea(figura, 150, yi, xf, 150);
    console.log("Linea " + l)
}

for(l=0; l < 30; l++)
{
    yi = 150 + (5 * l);
    xf = (5 * (l+1));
    dibujarLinea(figura, 150, yi, xf, 150);
    console.log("Linea " + l)
}

for(l=0; l < 30; l++)
{
    yi = 300 - (5 * l);
    xf = 150 + (5 * (l+1));
    dibujarLinea(figura, 150, yi, xf, 150);
    console.log("Linea " + l)
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
