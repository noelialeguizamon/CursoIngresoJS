/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    let num;
    let letra;
    let respuesta;
    
    
    while(respuesta==`s`){
        num= parseInt(prompt("ingrese un numero entre -100 y 100"));
        if(num< "-100" || num > "100"){
            num= parseInt(prompt("numero incorrecto, Ingrese un numero entre -100 y 100"));
        }else
        {   
        }
    
        respuesta=prompt("ingresa otro? s/n");
    }
//ver bien
}
