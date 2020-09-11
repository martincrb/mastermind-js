// control de flujo

// condicionales
var condicion = false;
var condicion2 = true;
if (condicion && condicion2) {
    // hago esto si se cumple condicion
    console.log('Estoy en el if');
} else {
    // hago esto otro si no se cumple condicion
    console.log('Estoy en el else');
}
// continuo ejecutando





// Se pueden encadenar
if (condicion1) {
    // Entro aqui si cumplo la primera condicion
} else if (condicion2) {
    // Entro aqui si cumplo la segunda
} else if (condicion3) {
    // Entro aqui si cumplo la tercera
} else {
    // Entro aqui si no cumplo ninguna
}






// Se pueden anidar
if (condicion1) {
    if (condicion2) {
        // Hago algo
    }
    // Luego hago otra cosa
} else {
    // Hago otra cosa distinta
}
