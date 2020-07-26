function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
let vMax = 10;
let vMin = 1;
let vNum;

vNum = Math.round(Math.random() * (vMax - vMin) + vMin);

if ((vNum >=9))
{
	alert(vNum + " = EXCELENTE");
}
else if(vNum <9 && vNum >=4)
{
	alert(vNum + " = APROBO");
}
else
{
	alert(vNum + " = vamos, la proxima se puede");
}

}//FIN DE LA FUNCIÓN