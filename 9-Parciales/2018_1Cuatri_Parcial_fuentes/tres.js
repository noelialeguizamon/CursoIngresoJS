function mostrar() {//pedir el precio y descuento
    let precio;
    let descuento;
    let precioConDescuento;

    precio = parseInt(prompt("ingrese un precio"));
    descuento = parseInt(prompt("ingrese un descuento"));

    precioConDescuento = precio - (precio*descuento/100);
 
    //mostrar por id el precio con el descuento

    document.getElementById("elPrecioFinal").value = precioConDescuento;


}   
