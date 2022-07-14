alert("Bienvenido a EmoyasThings, seleccione que producto deseas llevar.");
alert("Recuerda que esta semana todas las Fragancias tienen un descuento del 10%, si llevas hasta 2 unidades, del 20% si llevas mas de dos unidades y de 30% si llevas mas de 4 unidades");
alert("Realiza tu pedido seleccionando la opcion que deseas.");
do{
let opciones = parseInt(prompt("1.Fragancias: $700, 2.Tejidos: $3000, 3.Patrones: $1000"));

const resta = (a, b) => a-b;

class Producto {
    constructor(nombre, precio, codigo){
        this.nombre = nombre
        this.precio = precio
        this.codigo = codigo
    }
    calcularPrecioIva(){
        this.precio = this.precio*1.21 
    }
    calcularPrecioDescuento1(){
        this.precio = resta(this.precio*1.21, this.precio*0.1) 
    }
    calcularPrecioDescuento2(){
        this.precio = resta(this.precio*1.21, this.precio*0.2) 
    }
    calcularPrecioDescuento3(){
        this.precio = resta(this.precio*1.21, this.precio*0.3) 
    }

}
const fragancias = new Producto ("Fragancias", 700,1);
const fragancias1 = new Producto ("Fragancias", 700,1);
const fragancias2 = new Producto ("Fragancias", 700,1);
const tejidos = new Producto ("Tejidos", 3000,2);
const patrones = new Producto ("Tejidos", 1000,3);
fragancias.calcularPrecioDescuento1();
fragancias1.calcularPrecioDescuento2();
fragancias2.calcularPrecioDescuento3();
tejidos.calcularPrecioIva();
patrones.calcularPrecioIva();
const productos = [];
productos.push(fragancias)
productos.push(fragancias1)
productos.push(fragancias2)
productos.push(tejidos)
productos.push(patrones)

switch (opciones) {
    case 1:
            
                alert("Por favor seleciona la cantidad de Fragancias que deseas comprar");
                let cantidad = parseInt(prompt("Ingrese la cantidad", 0));
                
                    if (cantidad <= 2) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${fragancias.precio * cantidad}.`);
                        
                    } else if (2 < cantidad <= 4) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${fragancias2.precio * cantidad}.`);

                    } else if (cantidad > 5) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${fragancias2.precio * cantidad}.`);
                    }
                break;
    case 2:
                alert("Por favor seleciona la cantidad de Tejidos que deseas comprar");
                let cantidad1 = parseInt(prompt("Ingrese la cantidad", 0));
                
                    if (cantidad1 <= 2) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${tejidos.precio * cantidad1}.`);
                     
                    } else if (2 < cantidad1 <= 4) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${tejidos.precio * cantidad1}.`);

                    } else if (cantidad1 > 5) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${tejidos.precio * cantidad1}.`);
                    }
                break;    
    case 3:
                alert("Por favor seleciona la cantidad de  que deseas comprar");
                let cantidad2 = parseInt(prompt("Ingrese la cantidad", 0));
                
                    if (cantidad2 <= 2) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${patrones.precio * cantidad2}.`);
                        
                    } else if (2 < cantidad2 <= 4) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${patrones.precio * cantidad2}.`);

                    } else if (cantidad2 > 5) {
                        alert(`Muchas gracias por su compra, este producto se añadió al carrito. El precio final a pagar es de $${patrones.precio * cantidad2}.`);
                    }
                break;        
default:
alert('Por favor, elige una opcion valida');
break;
}
otraCompra = confirm(`Te gustaría hacer otra compra?`);

}while(otraCompra); 

