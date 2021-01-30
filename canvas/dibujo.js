var texto = document.getElementById("texto_lineas");
var color_usuario = document.getElementById("texto_color")
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = texto.value;
  var l = 0;
  var yi, xf;
  var color_fondo =  color_usuario.value;
  var espacio = ancho / lineas;

  for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea(color_fondo, 0, yi, xf,300);
    console.log("Linea " + l);
  }
  dibujarLinea(color_fondo, 1, 1, 1, 299);
  dibujarLinea(color_fondo, 1, 299, 299, 299);
}
