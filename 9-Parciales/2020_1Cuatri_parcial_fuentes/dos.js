/*compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
variables;
quiero el tipo de producto, la cantidad de bolsas pór producto y el precio de cada bolsa


*/


function mostrar() {
  let productos;
  let cantidadBolsas;
  let precioBolsas;
  let respuesta = "si";
  let i = 0;
  let contadorArena = 0;
  let contadorCal = 0;
  let contadorCemento = 0;
  let acumuladorArena = 0;
  let acumuladorCal = 0;
  let acumuladorCemento = 0;
  let descuento;



  do {

    productos = prompt("Ingrese un producto de construccion: arena, cal o cemento");
    if (productos != "arena" && productos != "cal" && productos != "cemento") {
      productos = prompt("ERROR. Ingrese un producto de construccion: arena, cal o cemento");

    }
    cantidadBolsas = parseInt(prompt("ingrese un numero de bolsas"));

    precioBolsas = parseFloat(prompt("ingrese el precio por bolsa:"));
    if (precioBolsas < 1) {
      precioBolsas = parseFloat(prompt("ERROR. Ingrese el precio por bolsa:"));
    }
    switch (productos) {
      case "arena":
        acumuladorArena += cantidadBolsas;
        contadorArena++;
        break;
      case "cal":
        acumuladorCal += cantidadBolsas;
        contadorCal++;
        break;
      case "cemento":
        acumuladorCemento += cantidadBolsas;
        contadorCemento++;
        break;
    }
    if (cantidadBolsas >= 10 && cantidadBolsas < 30) {
      descuento = 15 / 100;
    } else if (cantidadBolsas >= 30) {
      descuento = 25 / 100;
    } else {
      descuento = 0;
    }
    i++;
    respuesta = prompt("desea continuar: si/no");
  }
  while (respuesta == "si" || respuesta == `s`) {




}


}
