/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y 
si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %
 y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120 
 se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
     let cantidad;
     const precioLamparitas = 35;
     let desc;
     let marca;
     let precioConDescuento;
     let descuentofinal;
     let ingresosbrutos;


     cantidad = parseInt(document.getElementById("txtIdCantidad").value);
     marca = document.getElementById("Marca").value;

     switch (cantidad) {
          case 1:
          case 2:
               desc = 0;
               break;
          case 3:
               if (marca == "ArgentinaLuz") {
                    desc = 15;
               } else if (marca == "FelipeLamparas") {
                    desc = 10;
               } else {
                    desc = 5;
               }
               break;
          case 4:
               if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    desc = 25;
               } else {
                    desc = 20;
               }
               break;
          case 5:
               if (marca == "ArgentinaLuz") {
                    desc = 40;
               } else {
                    desc = 30;
               }
               break;
          default:
               desc = 50;
               break;
     }
     precioConDescuento = precioLamparitas * cantidad - (precioLamparitas * cantidad * desc / 100);
     ingresosbrutos = 10;

     if (precioConDescuento > 120) {
          descuentofinal = precioConDescuento + precioConDescuento * ingresosbrutos / 100;
          alert("ud pago " + ingresosbrutos + "% de IIBB");
     } else {
          ingresosbrutos = 0;
          descuentofinal = precioConDescuento + precioConDescuento * ingresosbrutos / 100;
     }
     document.getElementById("txtIdprecioDescuento").value = descuentofinal;



     /*   switch (cantidad) {
          case 1:
          case 2:
               desc = 0;
               precioConDescuento = (lamparitas * cantidad) - desc;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
               break;
          case 3:
               if (marca == "ArgentinaLuz") {
                    desc = (lamparitas * cantidad) * 0.15;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

               } else if (marca == "FelipeLamparas") {
                    desc = (lamparitas * cantidad) * 0.1;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
               } else
               {
                    desc= (lamparitas * cantidad) * 0.05;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
               }
               break;
          case 4:
              
               if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    desc = (lamparitas * cantidad) * 0.25;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
               }
               else {
                    desc = (lamparitas * cantidad) * 0.2;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;}
               break;
          case 5:
               if (marca == "ArgentinaLuz") {
                    desc = (lamparitas * cantidad) * 0.4;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    
               } else{
                    desc= (lamparitas * cantidad) * 0.3;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
               }
               break;
          default:
               
               desc = (lamparitas * cantidad) * 0.5;
                    precioConDescuento = (lamparitas * cantidad) - desc;
                    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
               break;
               */

}