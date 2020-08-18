
/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar() {
    let sexo;
    let nota;
    let acumuladorNotas = 0;
    let promedio;
    let acumuladorVarones=0;
    let contadoresVarones=0;
    let notaMasBaja = 10;
    
    for (let i = 0; i < 5; i++) {

        nota = parseInt(prompt("ingrese una nota:"));
        while (nota > 10 || nota <= 0 || isNaN(nota)) {
            nota = parseInt(prompt("nota mal ingresada, ingrese una nota: del 1 al 10:"));

        }
        sexo = prompt("ingrese el sexo: f/m");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("sexo mal ingresado, ingrese el sexo: f/m");

        }
        acumuladorNotas += nota;      //  a) El promedio de las notas totales.
        if (notaMasBaja > nota) {  //b) La nota más baja y el sexo de esa persona.
            notaMasBaja = nota;

        }
    }
    promedio = acumuladorNotas / 5;
    alert(promedio);
    alert(notaMasBaja);
    //(esto hasta aca funciona... me falta nota mas baja segun sexo)                            




}
