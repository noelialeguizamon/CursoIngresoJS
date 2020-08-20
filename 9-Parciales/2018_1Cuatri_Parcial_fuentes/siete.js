<<<<<<< HEAD

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


=======
function mostrar() {
    let nota;
    let sexo;
    let acumuladorNota = 0;
    let promedio;
    let notaMasBaja = 11;
    let sexoNotaMasBaja;
    let cantidadNotaMayor6Varones = 0;


    //pide 5 veces los datos
    for (let i = 0; i < 5; i++) {

        // pide las notas de los alumnos y la valida
        nota = parseInt(prompt("ingrese nota:"));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("error. Ingrese nota:"));
        }

        //pide el sexo de los alumnos y lo valida
        sexo = prompt("ingrese sexo: f/m");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error. Ingrese sexo: f/m");
        }

        //acumular nota
        acumuladorNota += nota; //acumulador = acumulador + nota

        //guardar la nota mas baja con el sexo
        if (nota < notaMasBaja) {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
        }

        //acumular varones con nota mayor o igual a 6
        if (nota >= 6 && sexo == "m") {
            cantidadNotaMayor6Varones++
        }

    }

    // se cuantas notas son(5) y cuanto suman(acumulador)
    promedio = acumuladorNota / 5;
    alert("el promedio de las notas fue: " + promedio);

    alert("la nota mas baja: " + notaMasBaja + " pertenece a sexo: " + sexoNotaMasBaja);

    alert("cantidad de varones con nota mayor o igual a 6: " + cantidadNotaMayor6Varones);
>>>>>>> ffb46f5026e7ea0ebbe50e12ecf12ebda018a315


}
