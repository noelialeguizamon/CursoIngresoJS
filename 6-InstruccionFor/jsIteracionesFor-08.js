function mostrar()
{

	let num;
	let contadorNumPrimo=0;
 
	num=parseInt(prompt("ingrese un numero:"));
	for(let i=1; i<=num; i++){
		if(num % i ==0){
			contadorNumPrimo++;
		}
	}	if(contadorNumPrimo==2){
		alert(num+" es numero primo");
	}else{
		alert(num+" no es numero primo")
	}
	
	

}//FIN DE LA FUNCIÓN