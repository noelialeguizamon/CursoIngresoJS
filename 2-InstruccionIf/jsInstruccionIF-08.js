function mostrar()
{
	//tomo la edad  
	
let vEdad;
let eCivil;

vEdad = parseInt(document.getElementById("txtIdEdad").value)
eCivil = document.getElementById("estadoCivil").value

if ( eCivil == "Soltero" && vEdad >=18)
{
	alert("es soltero y no es menor")
	

}

}//FIN DE LA FUNCIÓN