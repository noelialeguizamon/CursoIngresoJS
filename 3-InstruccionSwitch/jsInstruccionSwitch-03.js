 function mostrar()

{	let vMes;
	vMes =document.getElementById("txtIdMes").Value;
	switch(vMes)
	{case "Febrero" :
	alert ("este mes no tiene mas de 29 dias");
	break;

	default :
	alert("Este mes tiene 30 o más días");
	break;
		
	
	}

}//FIN DE LA FUNCIÓN