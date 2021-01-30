var client_bank, client_acct, client_bal; //Cliente
var destination_bank, destination_acct, destination_amount; //Destino
var hora_transfer;
var transfer_cost;
var boton = document.getElementById('submit').addEventListener("click", datos);
var stat;
var d = new Date();

client_bank = "Banxico"
client_bal = 552154756897
client_acct = 7984

function  datos()
{
  hora_transfer = 10;
  destination_bank = document.getElementById("destination_bank").value;
  destination_amount = parseInt(document.getElementById("transfer_amount").value);
  destination_acct = parseInt(document.getElementById("destination_acct").value);
  transfer();
  document.getElementById("transfer_amount").value = "";
  document.getElementById("destination_bank").value = "";
  document.getElementById("destination_acct").value = "";
}
function transfer()
{
  if(client_acct>0)
  {
    if( destination_acct>0 && ((hora_transfer >= 9 && hora_transfer <= 12) || (hora_transfer >= 15 && hora_transfer <= 20)) )
    {
      if(destination_bank == client_bank && client_bal >= destination_amount)
      {
        alert("Se transfirieron $" + destination_amount + " a la cuenta " + destination_bank + " exitosamente.");
        transfer_cost = 0;
        stat = "Transferencia Procesada Satisfactoriamente";
        returnInfo();
      }
      else if (destination_bank != client_bank && client_bal >= destination_amount + 100)
      {
        alert("Se transfirieron $" + destination_amount + " a la cuenta " + destination_bank + " exitosamente.");
        transfer_cost = 100;
        stat = "Transferencia Procesada Satisfactoriamente";
        returnInfo();
      }
      else
      {
        destination_amount = "N/A";
        transfer_cost = "N/A";
        stat = "No procesada, saldo insuficiente.";
        returnInfo();
      }
    }
    else
    {
      alert("prueba de nuevo");
    }
  }
  else
  {
    alert("La cuenta no existe!");
  }
}
function returnInfo()
{
  /*Cuenta de Retiro*/
  document.getElementById("inforetiro").innerHTML = client_bank + "<br />" + client_acct;
  /*Beneficiario*/
  document.getElementById("infobenef").innerHTML = destination_bank + "<br />" + destination_acct;

  document.getElementById('date').innerHTML += d.toDateString();
  document.getElementById("status").innerHTML += stat;
  document.getElementById("monto").innerHTML += "$" + destination_amount;
  document.getElementById("comision").innerHTML += "$" + transfer_cost;
}
