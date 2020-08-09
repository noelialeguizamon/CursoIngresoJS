/*al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, y 
mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{ 	
	let num;
	let contadorNumDivisores=0;
 
	num=parseInt(prompt("ingrese un numero:"));
	for(let i=0; i<=num; i++){
		if(num%i==0){
		console.log(i);
		contadorNumDivisores++;
		}
	}console.log(contadorNumDivisores+" encontrados.");	



}//FIN DE LA FUNCIÓN