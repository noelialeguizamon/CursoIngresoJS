function mostrar()
{
let vEdad;
let Ecivil;

vEdad = parseInt(document.getElementById("txtIdEdad").value);
Ecivil = document.getElementById("estadoCivil").value;



if (vEdad <18 && Ecivil != "Soltero")
{
	alert("es muy pequeño para NO ser soltero")

}
}//FIN DE LA FUNCIÓN