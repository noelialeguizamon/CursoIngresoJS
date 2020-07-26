/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let vNombre; //var quedo en desuso y ahora se estandarizo "let"//
	
	vNombre = prompt("nombre"); //prompt es una ventana emergente para escribir alli pongo lo que quiero que aparezca en la pantalla//

	document.getElementById("txtIdNombre").value = vNombre; // se usa para que vnombre se coloque dentro de "txtIdNombre"//
	


}

