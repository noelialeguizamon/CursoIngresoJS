/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   let vNum1;
    let vNum2;
    let vNum3;
    let suma;
    
    vNum1= parseInt(document.getElementById("txtIdPrecioUno").value);
    vNum2=parseInt(document.getElementById("txtIdPrecioDos").value);
    vNum3=parseInt(document.getElementById("txtIdPrecioTres").value);
    suma= vNum1+vNum2+vNum3;
    alert ("la suma de los 3 productos es "+ suma);
	
}
function Promedio () 
{   let vNum1;
    let vNum2;
    let vNum3;
    let promedio;
    vNum1= parseInt(document.getElementById("txtIdPrecioUno").value);
    vNum2=parseInt(document.getElementById("txtIdPrecioDos").value);
    vNum3=parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio= (vNum1+vNum2+vNum3) / "3";
   
    alert ("El promedio es "+ promedio);
	
}
function PrecioFinal () 
{   let vNum1;
    let vNum2;
    let vNum3;
    let precioFinal;
    let iva;

    vNum1= parseInt(document.getElementById("txtIdPrecioUno").value);
    vNum2=parseInt(document.getElementById("txtIdPrecioDos").value);
    vNum3=parseInt(document.getElementById("txtIdPrecioTres").value);
    iva= (vNum1+vNum2+vNum3)* 0.21;
    precioFinal=  (vNum1+vNum2+vNum3)+iva;
    alert("El precio final es "+ precioFinal);
}