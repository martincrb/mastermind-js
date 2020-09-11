// El scope es el contexto donde una variable es visible
// existen 2 scopes principales: global y local

// Scope global: Toda variable que está fuera de una funcion
var variableGlobal = 1;
function global() {
 console.log(variableGlobal);
}

global();
console.log(variableGlobal);





// Scope local: solo visible dentro de una funcion
function local() {
    var variableLocal = 2;
    console.log(variableLocal);
}
local();
//console.log(variableLocal); // No funciona



if (true) {
    // scope de bloque 1
} else {
    // scope de bloque 2
}



/*
// En javascript moderno (>2015) existe let
// let define scope de bloque
// un bloque es todo lo que se encuentra entre { y }

if (true) {
    // Esto es un bloque
    let variable = 0;
}

while (condicion) {
    // Esto es otro bloque
}

for (let i = 0; i < 10; ++i) {
    // Esto es otro bloque
}


var condicion1 = true;
if (condicion1) {
    let a = 1;
    console.log(a);
}
console.log(a);
// Aunque no hayamos usado ninguna funcion, el segundo console log falla

// Si hubieramos usado var
var condicion2 = true;
if (condicion2) {
    var b = 1;
    console.log(b);
}
console.log(b); // Como b esta creado con var, se ha creado en el contexto global


// Se recomienda siempre usar let en vez de var para evitar problemas de scope
*/