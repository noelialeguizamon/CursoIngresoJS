/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let numero1;
	let numero2;
	let resultado;

	//no me tengo que olvidar el "document.getelementbyid..." para que tome los datos del html//

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//parseo para que los numeros me den enteros//
	
	resultado = numero1 + numero2;

	alert("la suma es " + resultado);


}

