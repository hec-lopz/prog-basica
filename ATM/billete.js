class Billete
{
  constructor(val, qty)
  {
    this.imagen = new Image();
    this.valor = val;
    this.cantidad = qty;

    this.imagen.src = imagenes[this.valor.toString()];
  }
  mostrar()
  {
    this.imagen.setAttribute("style", "float:left;width:200px;height:100px");
    document.body.appendChild(this.imagen)
  }
}




var imagenes = [];
imagenes["50"] = "50.jpg";
imagenes["20"] = "20.jpg";
imagenes["10"] = "10.jpg";
