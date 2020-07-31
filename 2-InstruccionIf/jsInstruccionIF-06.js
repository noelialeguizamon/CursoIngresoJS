function mostrar()
{
let edad;

edad =document.getElementById("txtIdEdad").value;

if (edad <13)
{
	alert("Niño");
}
else if (edad >=13 && edad <=17)
{
	alert("Es adolescente");
}
else{
	alert("Es mayor de edad");
}

}//FIN DE LA FUNCIÓN