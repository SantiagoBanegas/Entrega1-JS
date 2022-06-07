
const suma = function (n1, n2){return n1 + n2};
const resta = function (n1, n2){return n1 - n2};
const iva = function (valor){return valor * 0.21};

let precioDelProd = Number(prompt("Ingrese el valor del producto para añadirle IVA y calcular el precio final"))
let descuento = 25
let precioConIva = resta(suma(precioDelProd, iva(precioDelProd)),descuento)
alert("Su precio final con IVA incluido  y  $25 de descuento como regalo es de " + "$ " + precioConIva)




