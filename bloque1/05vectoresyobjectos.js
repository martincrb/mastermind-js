var array = ["aa", "bb", 3, [1, 2], {nombre: 'Nombre', apellido: 'Apellido'}];
var objeto = {
    nombre: 'Martin', 
    apellido: 'Cristobal',
    edad: 26,
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        calle: 'texto de la calle',
        numero: 4
    }
}

var item0 = array[0];
var item1 = array[1];

var indice = 4;
var item4 = array[indice].nombre;

var nombreObjeto = objeto.nombre;
var textoCalle = objeto.coches[0];


var item50 = array[50];
console.log(item50);

var piso = objeto.piso[1];
console.log(piso);

var longitud = array.length

var isValidPosition = 50 >= 0 && 50 < array.length