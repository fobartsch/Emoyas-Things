let respuesta = "BUENOS AIRES"; 	 	 
let acierto = false; 	 	 
for (var contador = 0; contador < 3 && acierto === false; contador++) {	 	 
    let respUsuario = prompt("Capital de Argentina: ");
        if (respUsuario.toUpperCase() === respuesta) { 	 	 
        let acierto = true; 
        alert("Respuesta correcta, has acertado!!!");	 	
	    }	 	 
}	 	 
if (!acierto) {alert("Lo sentimos, has consumido tus 3 intentos")}; 