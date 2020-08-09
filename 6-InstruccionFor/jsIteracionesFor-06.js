function mostrar()
{	//alert("ok");
	let num;
	let contador=0;
	num = parseInt(prompt("ingrese un numero:"))
	for(let i=1; i<=num ; i++){
	
		if(i%2==0){
		console.log(i+" es numero par.");//alert("el numero "+i+" es par");
		contador++;
	}	
	}
	console.log(contador+" encontrados.");	
//alert("se encontraron "+contador+" numeros pares");





}//FIN DE LA FUNCIÓN