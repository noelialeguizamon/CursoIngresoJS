/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   let Fahrenheit;
    let centigrados;
    

    Fahrenheit= parseInt(document.getElementById("txtIdTemperatura").value);
    centigrados=Fahrenheit-32;
    alert (Fahrenheit+ " fahrenheit son "+ centigrados+" grados centigrados.");
	
}

function CentigradosFahrenheit () 
{   let Fahrenheit;
    let centigrados;
    centigrados= parseInt(document.getElementById("txtIdTemperatura").value);
    Fahrenheit= centigrados+32;
    alert(centigrados+" grados centigrados son "+ Fahrenheit + " grados fahrenheit.");
	
}
