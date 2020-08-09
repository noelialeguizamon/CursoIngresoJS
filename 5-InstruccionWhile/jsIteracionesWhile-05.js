/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
    let vSexo;
    do {
       
        vSexo = prompt("ingrese su sexo:");
        document.getElementById("txtIdSexo").value = vSexo;

    }
    while (!(vSexo == "f" || vSexo == "m"));

}//FIN DE LA FUNCIÓN