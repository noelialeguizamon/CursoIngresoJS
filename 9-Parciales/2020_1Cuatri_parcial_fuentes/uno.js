
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar() {
	let producto;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorBarbijos = 0;		//acumulador
	let acumuladorAlcohol = 0;		//acumulador
	let acumuladorJabon = 0;		//acumulador
	let contadorBarbijos = 0;		//contadores
	let contadorAlcoholes = 0;	//contadores
	let contadorJabones = 0;		//contadores
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorProducto;
	let flagAlcohol = 0;			//primerAlcohol que considero
	let mensajeAlcohol;
	let mensajeB;
	let mensajeJabon; 


	for (let i = 0; i < 5; i++) {

		producto = prompt(`ingrese un producto: "barbijo","alcohol" o "jabon" `);
		while (producto != "barbijo" && producto != "alcohol" && producto != "jabon") {
			producto = prompt(`error en el producto. Ingrese un producto: "barbijo","alcohol" o "jabon" `);
		}
		precio = parseFloat(prompt("ingrese el precio, entre 100 y 300"));
		while (precio < 100 || precio > 300) {
			precio = parseFloat(prompt("precio incorrecto. Ingrese el precio, entre 100 y 300"));
		}
		cantidad = parseInt(prompt("ingrese cantidad de producto: hasta 1000"));
		while (!(cantidad <= 1000)) {
			cantidad = parseInt(prompt("ERROR en la cantidad. Ingrese cantidad de producto: hasta 1000"));
		}
		//alert(cantidad+" "+producto+" "+precio+" pesos cada uno.");
		marca = prompt("escriba marca:");

		fabricante = prompt("nombre del fabricante:");
		if (producto == "alcohol") {
			acumuladorAlcohol += cantidad;  //acumuladorAlcohol= acumuladorAlcohol+cantidad;
			contadorAlcoholes++;
			if (flagAlcohol == 0 || precioAlcoholBarato > precio) {
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				fabricanteAlcoholBarato = fabricante;
				flagAlcohol = 1;
			}

		} else if (producto == "barbijo") {
			acumuladorBarbijos += cantidad;
			contadorBarbijos++;



		} else {
			acumuladorJabon += cantidad; // contador de unidades totales de jabon, cantidad 
			contadorJabones++;
		}
	}
	if (acumuladorAlcohol > acumuladorBarbijos && acumuladorAlcohol > acumuladorJabon) {

		mayorProducto ="alcohol";
		promedioCompra = acumuladorAlcohol/contadorAlcoholes;
	}
	else if (acumuladorBarbijos >= acumuladorAlcohol && acumuladorBarbijos > acumuladorJabon) {
		mayorProducto = "barbijo"
		promedioCompra = acumuladorBarbijos/contadorBarbijos;
	}
	else {
		mayorProducto = "jabon";
		promedioCompra = acumuladorJabon/contadorJabones;

	}
	if (flagAlcohol==1){		
		mensajeAlcohol="A- fabricante alcohol barato es: "+ fabricanteAlcoholBarato + " cantidad "+ cantidadAlcoholBarato+" precio "+ precioAlcoholBarato;

	}else
	{
		mensajeAlcohol= "A-no se ingresaron productos de alcohol.-";
	}
	mensajeB= "B- el producto con mayor cantidad "+ mayorProducto+" el promedio por compra es de "+ promedioCompra;
	mensajeJabon="C- el total de jabones comprado es "+ acumuladorJabon;

	alert( mensajeAlcohol+"\n"+ mensajeB+"\n"+mensajeJabon);

}
