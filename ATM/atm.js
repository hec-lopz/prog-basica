
var caja = [];
caja.push(new Billete(100, 50));
caja.push(new Billete(50, 50));
caja.push(new Billete(20, 50));
caja.push(new Billete(10, 50));
caja.push(new Billete(5, 150));
caja.push(new Billete(1, 100));



var dinero;
var papeles = 0;
var div = 0;
var encaja;


function entregarDinero()
{
  var entregado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  if(dinero <= encaja)
  {


    for(calc of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero / calc.valor);
        if(div > calc.cantidad)
        {
          papeles = calc.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push(new Billete(calc.valor, papeles));
        dinero = dinero - (calc.valor * papeles);
        calc.cantidad = calc.cantidad - papeles
      }
    }

      for(e of entregado)
      {
        if(e.cantidad > 0)
        {
          resultado.innerHTML += `${e.cantidad} billetes de $${e.valor} <img src=${e.imagen.src}><br/>`;

        }
      }
    }
  else
  {
    resultado.innerHTML = 'Lo siento, no tengo suficiente dinero.<p /> Dinero disponible: $' + encaja;
  }
contarCaja();
console.log(caja);
}


function  contarCaja()
{
  encaja=0;
  var total;
  for(inbox of caja)
  {
    total = inbox.valor * inbox.cantidad;
    encaja = (inbox.valor * inbox.cantidad) + encaja;
  }
  var balance = document.getElementById("balance_caja");
  balance.innerHTML = "Hay $" + encaja + " actualmente.";
}
function limpiar()
{
  resultado.innerHTML = "";
  entregado = 0;
}

contarCaja();
var b_limp = document.getElementById("Limpiar");
var resultado = document.getElementById("resultado");
var billeteResult = document.getElementById('billete-resultado')
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
b_limp.addEventListener("click", limpiar);

console.log(caja);
