/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let negativo = 1;
	let positivo = 0;
	let num;
	let respuesta = "si";

	while (respuesta == "si")
	
	{	num =parseInt(prompt("ingrese un numero: "));
		if (num >= 0);
		{
			positivo = positivo + num;
		}
		else {
			negativo = negativo * num;
		}
		respuesta = prompt("ingresa otro? si/no");
	}

	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;
	/*
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos; */

}//FIN DE LA FUNCIÓN