/*
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/

function mostrar() {
    let planeta;

    planeta = prompt("ingrese un planeta del sistema solar:");

    switch (planeta) {
        case "tierra":
            alert("acá vivimos");
            break;
        case "mercurio":
        case "venus":
            alert("acá hace más calor");
            break;
        case"marte":
        case"jupiter":
        case"saturno":
        case"urano":
        case"neptuno":
            alert("acá hace más frio");
            break;
        default:
            alert("No es un planeta valido");
            break;
    }


}
