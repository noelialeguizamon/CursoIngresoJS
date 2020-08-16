/*
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/


function mostrar() {
    let vNum1;
    let vNum2;
    let suma;
    let resta;
   
    
    vNum1 = parseInt(prompt("indique un numero"));
    vNum2 = parseInt(prompt("indique otro numero"));

    if (vNum1 == vNum2) {
        alert(vNum1 + " = " + vNum2);
    } else if (vNum1 > vNum2) {
        resta=vNum1-vNum2;
        alert(resta);
    } else {
        suma=vNum1+vNum2;
        alert(suma);
    }
    if(suma>10){
        alert("la suma es " + suma+ " y supero el 10");
    }
    


}

