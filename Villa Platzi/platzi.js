var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
// var usuario = prompt("Cuál es tu nombre?");
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}
var pigPosX = 0;
var pigPosY = 0;
var housePosX = 400;
var housePosY = 400;
var winPos = housePosX * housePosY;

var fondo ={
  url: "tile.png",
  cargaOK: false
}
//Utilizamos la declaracion de variables JASON para darle elemntos a las variable.
//No podemos declarar una imagen dentro de JASON, por lo que lo declaramos abajo en fondo.imagen
var vaca = {
  url: "vaca.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

fondo.imagen = new Image();
//Crear un nuevo objeto.
//Para la definicion de un objeto es buena practica poner la primer letra en mayuscula.
//Las definiciones completas de un objeto son llamadas clases. Para definir al objeto 'imagen' usamos una clase.
//Estamos creando una nueva definicion de objeto (new Image();)y lo guardamos en la variable imagen que es un
//elemento de la var fondo
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
//aniadimos el listener porque no se puede dibujar hasta que este cargada la img

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
vaca.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos)

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujarCerdo();
}

function dibujarCerdo()
{
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, pigPosX, pigPosY);
  }
}
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    var cantidad = aleatorio(5, 25);
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 9);
      var x = x * 70;
      var y = y * 47;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    var cantidad = aleatorio(5, 25);
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 9);
      var x = x * 70;
      var y = y * 47;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function resetCanvas()
{
  {
    if(fondo.cargaOK)
    {
      papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
      var cantidad = aleatorio(5, 25);
      console.log(cantidad);
      for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 6);
        var y = aleatorio(0, 9);
        var x = x * 70;
        var y = y * 47;
        papel.drawImage(vaca.imagen, x, y);
      }
    }
    if(pollo.cargaOK)
    {
      var cantidad = aleatorio(5, 25);
      console.log(cantidad);
      for(var v=0; v < cantidad; v++)
      {
        var x = aleatorio(0, 6);
        var y = aleatorio(0, 9);
        var x = x * 70;
        var y = y * 47;
        papel.drawImage(pollo.imagen, x, y);
      }
    }
  }
}
document.addEventListener("keydown", moverCerdo)

function moverCerdo(evento)
{
  console.log(evento.keyCode)
  switch (evento.keyCode) {
    case teclas.UP:
      var movimiento = 50;
      resetCanvas();
      papel.drawImage(cerdo.imagen, pigPosX, pigPosY - movimiento);
      pigPosY = pigPosY - movimiento
      ganarJuego();
    break;
    case teclas.DOWN:
      var movimiento = 50;
      resetCanvas();
      papel.drawImage(cerdo.imagen, pigPosX, pigPosY + movimiento);
      pigPosY = pigPosY + movimiento;
      ganarJuego();
    break;
    case teclas.RIGHT:
      var movimiento = 50;
      resetCanvas();
      papel.drawImage(cerdo.imagen, pigPosX + movimiento, pigPosY);
      pigPosX = pigPosX + movimiento;
      ganarJuego();
    break;
    case teclas.LEFT:
      var movimiento = 50;
      resetCanvas();
      papel.drawImage(cerdo.imagen, pigPosX - movimiento, pigPosY);
      pigPosX = pigPosX - movimiento;
    break;
    }
}


function ganarJuego()
{
  if(pigPosX * pigPosY == winPos)
  {
    alert("Felicidades, " + usuario + ", llevaste a tu cerdito a casa!")
    resetCanvas();
    pigPosX = 0
    pigPosY = 0
    dibujarCerdo();
  }
}
function aleatorio(min,maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
function refreshPage()
{}
