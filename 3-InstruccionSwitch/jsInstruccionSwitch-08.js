function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	
	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("frio");
			break;
		case "Catamarca":
		case "Mar del plata":
			alert ("calor");
			break;
		default:
			alert("no aplica");
			break;
	}

	//if (destino == "Bariloche" || destino == "Ushuaia")
	//{
	//	alert("frio");
	//}
	//else 
	//{
	//	alert("calor");
	//}
	
	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

}//FIN DE LA FUNCIÓN