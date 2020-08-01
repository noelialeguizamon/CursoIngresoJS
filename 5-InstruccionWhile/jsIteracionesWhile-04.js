/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numingreso;
	do{
	numingreso = parseInt(prompt("ingrese un numero entre 0 y 10."));
	document.getElementById("txtIdNumero").value = numingreso;
	}
	while(!(numingreso >=0 && numingreso <=10));

	//numingreso;
	//numingreso = prompt("ingrese un numero entre 0 y 10.");
	//while (numingreso<0 || numingreso>9);
	//{ numingreso =parseint(prompt("ingrese un numero entre 0 y 10."))}

}//FIN DE LA FUNCIÓN