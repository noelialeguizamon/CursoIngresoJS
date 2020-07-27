/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	      //declarar las variable y las constantes antes de empezar a codear//
	var vnombre;
	var vedad;

	vnombre = document.getElementById("txtIdNombre").value;


	vedad = document.getElementById("txtIdEdad").value;


	//alert("usted se llama "+ vnombre +" y tiene "+ vedad +" años" ); este tambien funciona acordarse de separar con espacios dentro de las comillas//
	
	alert(`usted se llama ${vnombre} y tiene ${vedad} años`); // OJO que no va entre comillas sino entre apostrofes//
	



}

