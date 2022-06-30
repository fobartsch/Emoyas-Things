var respuesta = "BUENOS AIRES"; 	 	 
var acierto = false; 	 	 
for (var contador = 0; contador < 3 && acierto === false; contador++) {	 	 
    var respUsuario = prompt("Capital de Argentina: ");
        if (respUsuario.toUpperCase() === respuesta) { 	 	 
        var acierto = true; 
        alert("Enhorabuena, has acertado");	 	
	    }	 	 
}	 	 
if (!acierto) {alert("Lo sentimos, has consumido tus 3 intentos")}; 