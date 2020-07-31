function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if (destino == "Ushuaia")
	{
		alert ("sur");
	}
	else if (destino == "Cataratas")
	{
		alert("norte");

	}
	else if (destino == "Mar del plata")
	{
		alert("Este");

	}
	else
	{
		alert("Oeste");

	}

}	//se puede usar con if o con switch//

	//switch (destino)
	 
		//case "Ushuaia": 
		//	alert ("sur");
		//	break;
	
	  	//case "Cataratas":
		  //alert("norte");
			//break;
		
		//case "Mar del plata":
		//	alert("Este");
		//	break;
		//case "Bariloche":
		//	alert("Oeste");
		//	break;}



	//	var destinoIngresado =txtIdDestino.value;//
	//alert(destinoIngresado);//

//FIN DE LA FUNCIÓN