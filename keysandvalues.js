// Proyecto 1
// Crear una función que tome un objeto y devuelva las keys y values como matrices separadas.
// Devuelve las keys ordenadas alfabéticamente, y sus correspondientes values en el mismo orden

/* Valores a utilizar como prueba del orden en las keys ya values
   Descomentar el valor a probar */

//let keysAndValues = {a: 1, b: 2, c: 3}
//let keysAndValues = {a: "apple", b: "microsoft", c: "Google"}
//let keysAndValues = {key1: true, key2: false, key3: undefined}
let keysAndValues = {jedi: "Kanan Garrus", sith: "Darth Vader", clone: "Capitan Rex"}

// Función para ordenar de acuerdo a la key
function ordObject(obj){
  return Object.keys(obj)
  .sort().reduce((a, v) => {
    a[v] = obj[v];
    return a; 
  }, {});
}

//Nueva matriz con las keys ordenadas y values de acuerdo a las keys
let objectOrd = ordObject(keysAndValues);

// Función para separar las keys y values en matrices separadas
function sepObject(){
  return [Object.keys(objectOrd),Object.values(objectOrd)];
} 

//
let resultadoFinal = sepObject(keysAndValues);

// Impresión en consola del resultado final
console.log(resultadoFinal)