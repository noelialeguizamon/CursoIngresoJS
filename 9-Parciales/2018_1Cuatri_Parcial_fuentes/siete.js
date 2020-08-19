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


}
