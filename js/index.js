
alert("Bienvenido a EmoyasThings, seleccione que producto deseas llevar.");
alert("Recuerda que esta semana todas las Fragancias tienen un descuento del 10%, si llevas hasta 2 unidades, del 20% si llevas mas de dos unidades y de 30% si llevas mas de 4 unidades");
alert("Realiza tu pedido seleccionando la opcion que deseas.");
do{
let opciones = parseInt(prompt("1.Fragancias: $700, 2.Tejidos: $3000, 3.Patrones: $1000"));
const suma = (a, b) => a+b;
const resta = (a, b) => a-b;
const producto = (a, b) => a*b;
const fragancias = 700;
const tejidos = 3000;
const patrones = 1000;
let descuento1 = 0.1;
let descuento2 = 0.2;
let descuento3 = 0.3;
const iva = 0.21;
let precioFragancias1 = resta (suma(fragancias, iva*fragancias), descuento1*fragancias);
let precioFragancias2 = resta (suma(fragancias, iva*fragancias), descuento2*fragancias);
let precioFragancias3 = resta (suma(fragancias, iva*fragancias), descuento3*fragancias);
let precioTejidos = suma (tejidos, iva*tejidos);
let precioPatrones = suma (patrones, iva*patrones);
switch (opciones) {
            case 1:
                        alert("Por favor seleciona la cantidad de Fragancias que deseas comprar");
                        let cantidad = parseInt(prompt("Ingrese la cantidad", 0));
                        
                            if (cantidad <= 2) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioFragancias1 * cantidad}.`);
                                
                            } else if (2 < cantidad <= 4) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioFragancias2 * cantidad}.`);

                            } else if (cantidad > 5) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioFragancias3 * cantidad}.`);
                            }
                        break;
            case 2:
                        alert("Por favor seleciona la cantidad de Tejidos que deseas comprar");
                        let cantidad1 = parseInt(prompt("Ingrese la cantidad", 0));
                        
                            if (cantidad1 <= 2) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioTejidos * cantidad1}.`);
                             
                            } else if (2 < cantidad1 <= 4) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioTejidos * cantidad1}.`);

                            } else if (cantidad1 > 5) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioTejidos * cantidad1}.`);
                            }
                        break;    
            case 3:
                        alert("Por favor seleciona la cantidad de  que deseas comprar");
                        let cantidad2 = parseInt(prompt("Ingrese la cantidad", 0));
                        
                            if (cantidad2 <= 2) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioPatrones * cantidad2}.`);
                                
                            } else if (2 < cantidad2 <= 4) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioPatrones * cantidad2}.`);

                            } else if (cantidad2 > 5) {
                                alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${precioPatrones * cantidad2}.`);
                            }
                        break;        
    default:
        alert('Por favor, elige una opcion valida');
        break;
}
otraCompra = confirm(`Te gustaría hacer otra compra?`);

}while(otraCompra);