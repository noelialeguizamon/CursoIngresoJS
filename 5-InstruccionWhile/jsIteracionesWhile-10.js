/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let num;
	let sumaNeg=0;
	let sumaPos=0;
	let contadorPositivo=0;
	let contadorNegativo=0;
	let cantidadCeros=0;
	let cantidadPares=0;
	let promedioNegativos;
	let promedioPositivo;
	let diferencia;
	let resp;
	
	do{
		num=parseInt(prompt("ingrese un numero:"));
		if( num<0){
			sumaNeg=sumaNeg + num;//sumaNeg+=num; que es lo mismo
			contadorNegativo++;
		}
		else if(num>0){
			sumaPos= sumaPos+num;
			contadorPositivo++;
		}
		else{
			cantidadCeros++;
		}
		if(num%2==0){
			cantidadPares++;
		}

		resp= prompt("desea ingresar un nuevo numero? si-no")

	}while(resp=="si"|| resp==`s`);

	promedioPositivo = sumaPos / contadorPositivo;
	promedioNegativos= sumaNeg /contadorNegativo;
	diferencia= contadorPositivo-contadorNegativo;

	 //es similar al write... me muestra lo que hago en la consola
	console.log("la suma de los negativos es: " + sumaNeg); 	
	console.log("la suma de los positivos es: " + sumaPos);
	console.log("la cantidad de negativos es: " + contadorNegativo);
	console.log("la cantidad de positivos es: " + contadorPositivo);
	console.log("la cantidad de ceros es: " + cantidadCeros);
	console.log("la cantidad de pares es: " + cantidadPares);
	console.log("el promedio de negativos es: " + promedioNegativos);
	console.log("el promedio de positivos es: " + promedioPositivo);
	console.log("la diferencia entre positivo y negativo es: " + diferencia);
	//document.writeln("") no lo utilizo 

	//declarar contadores y variables 
	/*var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;

	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :"+sumaNegativos);
	*/
}//FIN DE LA FUNCIÓN