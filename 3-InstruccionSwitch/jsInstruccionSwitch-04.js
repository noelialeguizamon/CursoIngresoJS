function mostrar()
{
let vMes;

vMes =document.getElementById("txtIdMes").value ;

switch (vMes)
{ case "Febrero":
alert("tiene 28 dias");
break;
case "Abril":
case "Junio":
case "Septiembre":
case "Noviembre":
	alert("tiene 30 dias");
break;
default:
	alert("tiene 31 dias");
break;
	

}

}//FIN DE LA FUNCIÓN