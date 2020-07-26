/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var vnombre;
	var vedad;

	vnombre = document.getElementById("txtIdNombre").value;


	vedad = document.getElementById("txtIdEdad").value;


	//alert("usted se llama "+vnombre+" y tiene "+vedad+" años" );
	
	alert(`usted se llama ${vnombre} y tiene ${vedad} años`);
	



}

