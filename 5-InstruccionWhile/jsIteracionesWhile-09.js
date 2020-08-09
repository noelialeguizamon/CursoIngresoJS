/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	/*let num=0;
	let numMaximo=0;
	let numMinimo=0;
	let resp="si";

	
		num = parseInt(prompt("ingrese un numero"));
		numMaximo = num;
		numMinimo = num;
		resp = prompt("ingresa otro numero? si/no");
		
	while(resp=="si"){
		num = parseInt(prompt("ingrese un numero"));
		if(num>numMaximo){
			numMaximo=num;
		}else if(num<numMinimo){
			numMinimo=num;
		}
		resp = prompt("ingresa otro numero? si/no");
	}
	document.getElementById("txtIdMaximo").value = numMaximo
	document.getElementById("txtIdMinimo").value = numMinimo
	*/
	
		/*let num;
		let numMaximo;
		let numMinimo;
		let resp;
		let flag=0;

	
		do{
			num = parseInt(prompt("ingrese un numero"));
			if (flag==0){
			numMaximo=num;
			numMinimo=num;
			flag=1;
			}	
			if(num>numMaximo){
				numMaximo=num;
			}
			else if(num<numMinimo){
				numMinimo=num;
			}
			resp = prompt("ingresa otro numero? si/no");
		}		
		while(resp=="si"||resp==`s`)
		
		document.getElementById("txtIdMaximo").value = numMaximo;
		document.getElementById("txtIdMinimo").value = numMinimo;
		*/
	let num;
	let max;
	let min;
	let resp;
	let flag=0;

	do{
		num = parseInt(prompt("ingrese un numero"));
		if(flag==0 || num>max){
			max=num;
		}
		if(flag==0 ||num<min){
			min=num;
			flag=1;
		}
		resp = prompt("ingresa otro numero? si/no");
	}		
	while(resp=="si"||resp==`s`)
	
	document.getElementById("txtIdMaximo").value = numMaximo;
	document.getElementById("txtIdMinimo").value = numMinimo;

	
	
}//FIN DE LA FUNCIÓN