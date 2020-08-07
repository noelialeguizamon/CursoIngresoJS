/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador = 0;
	let respuesta;
	let acumulador = 0;
	let num;
	respuesta = "si";

	do
	{ 
		num = parseInt(prompt("ingrese un numero:"));
		acumulador = acumulador + num;
		contador = contador +1; //itterar a contador//

		respuesta = prompt("ingresa otro? si/no ");

	} while(respuesta == "si"); //cuando corre desde do... me pregunta ingrese un num...
								//luego me preguntara si quiero seguir.. si pongo que si 
								//el loop vuelve a "do" y vuelve a preguntar hasta que no 
								//pongas mas si...
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador; 



	/*var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
	*/
}//FIN DE LA FUNCIÓN