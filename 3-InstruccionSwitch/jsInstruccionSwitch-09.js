/*una agencia de viajes debe sacar las tarifas de los viajes ,se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/


function mostrar() {
	let estacion;
	let destino;
	let descuento;
	let aumento;
	const precio = 15000;
	let precioConDescuento20;
	let precioConDescuento10;
	let precioConAumento20;
	let precioConAumento10;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precioConAumento20 = parseFloat(precio + (precio * 0.2));
	precioConAumento10 = parseFloat(precio + (precio * 0.1));
	precioConDescuento10 = parseFloat(precio - (precio * 0.1));
	precioConDescuento20 = parseFloat(precio - (precio * 0.2));

	switch (destino) {
		case "Bariloche":
			{
				if (estacion == "Invierno") {
					alert("Bariloche tiene un costo de: " + precioConAumento20);
				} else if (estacion == "Verano") {
					alert("Bariloche tiene un costo de: " + precioConDescuento20);
				} else {
					alert("Bariloche tiene un costo: " + precioConAumento10);
				}
				break;
			}
		case "Cataratas":
			{
				if (estacion == "Invierno") {
					alert("Cataratas tiene un costo de: " + precioConDescuento10);
				} else if (estacion == "Verano") {
					alert("Cataratas tiene un costo de: " + precioConAumento10);
				} else {
					alert("Cataratas tiene un costo: " + precioConAumento10);
				}
				break;
			}
		case "Cordoba":
			{
				if (estacion == "Invierno") {
					alert("Cordoba tiene un costo de: " + precioConDescuento10);
				} else if (estacion == "Verano") {
					alert("Cordoba tiene un costo de: " + precioConAumento10);
				} else {
					alert("Cordoba tiene un costo: " + precio);
				}
				break;
			}
		case "Mar del plata":
			{
				if (estacion == "Invierno") {
					alert("Mar del Plata tiene un costo de: " + precioConDescuento20);
				} else if (estacion == "Verano") {
					alert("Mar del Plata tiene un costo de: " + precioConAumento20);
				} else {
					alert("Mar del Plata tiene un costo: " + precioConAumento10);
				}
				break;
			}
	}



}
//var estacionIngresada =txtIdEstacion.value;
//alert(estacionIngresada);
//FIN DE LA FUNCIÓN