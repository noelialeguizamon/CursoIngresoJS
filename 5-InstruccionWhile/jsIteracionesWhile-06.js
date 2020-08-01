function mostrar()
{
	let num;
	let i=0;
	let acumulador =0;
	let promedio = 0;


	while (i<5)
	{num = parseInt(prompt("ingrese un numero :"));
	acumulador =acumulador + num;
	i++;
	
	}
	promedio = acumulador / i;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN