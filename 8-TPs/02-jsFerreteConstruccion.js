/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let metrosAlambre;

    largo= parseInt(document.getElementById("txtIdLargo").value);
    ancho= parseInt(document.getElementById("txtIdAncho").value);
    metrosAlambre= largo*ancho;
    alert("se necesitan "+ metrosAlambre+" mts. de alambre.");
}
function Circulo () 
{   let radio;
    let pi = "3.14";
    let resultado;

    radio= parseInt(document.getElementById("txtIdRadio").value);
    resultado=parseFloat(radio * radio)* pi;
    alert("Se necesitan "+ resultado+" mts de alambre para la circunferencia");
	
}
function Materiales () 
{   let largo;
    let ancho;
    let metrosAlambre;
    let cemento=2;
    let cal=3;
    let resultadoCemento;
    let resultadoCal;

    largo= parseInt(document.getElementById("txtIdLargo").value);
    ancho= parseInt(document.getElementById("txtIdAncho").value);
    metrosAlambre= largo*ancho;
    resultadoCemento= metrosAlambre * cemento;
    resultadoCal= metrosAlambre*cal;
    alert("se Necesitan "+ resultadoCemento+ " de bolsas de cemento y se necesitan "+resultadoCal+" de bolsas de cal.");
	
}