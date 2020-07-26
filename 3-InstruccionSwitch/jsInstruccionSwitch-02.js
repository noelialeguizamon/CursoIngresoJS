function mostrar()
{
	let vMes;

	vMes = document.getElementById("txtIdMes").value;
	switch(vMes)
	{ 	case "Marzo" :
	case "Abril" :
	case "Mayo" :
	case "Junio" :
		alert("falta para el invierno");
	break;
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio");
	break
	default :

		alert("ya pasamos el frio, ahora calor");
	break;
	
	}

}//FIN DE LA FUNCIÓN