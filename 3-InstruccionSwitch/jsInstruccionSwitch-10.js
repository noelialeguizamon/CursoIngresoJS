
	/*una agencia de viajes nos piden informar 
	si hacemos viajes a lugares según la estación del año estemos, 
	informar si "Se viaja" o "No se viaja" a ese lugar
	en Invierno: Solo Bariloche informa "se viaja" 
	los demas destinos "No se viaja"
	en Verano: Se viaja a Mar del plata y Cataratas solamente
	en Otoño: Se viaja a todos los destinos.
	primavera: solo no se viaja a Bariloche*/

	function mostrar()
{
		let estacion;
		let destino;
		
		estacion= document.getElementById("txtIdEstacion").value;
		destino= document.getElementById("txtIdDestino").value;
		
		switch(destino)
		{
			case"Bariloche":
			{
				if (estacion=="Invierno" || estacion=="Otoño")
				{
					alert("se viaja");
				}else
				{
					alert("no se viaja")
				}
				break;
			}	
			case"Cataratas":
			{
				if (estacion!="Invierno")
				{
					alert("se viaja");
				}else
				{
					alert("no se viaja")
				}
				break;
			}	
			case"Mar del plata":
			{
				if (estacion!="Invierno")
				{
					alert("se viaja");
				}else
				{
					alert("no se viaja")
				}
				break;
			}	
			case"Cordoba":
			{
				if (!(estacion=="Invierno" || estacion=="Verano"))
				{
					alert("se viaja");
				}else
				{
					alert("no se viaja")
				}
				break;
			}	
		}






	//var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);
}//FIN DE LA FUNCIÓN