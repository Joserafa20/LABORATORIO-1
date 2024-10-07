// Punto numero 1

let nombre = "Carlos";
let edad = 30;
let esEstudiante = false;

console.log("Nombre",nombre);
console.log("Edad",edad);
console.log("Es estudiante",esEstudiante);

// Punto numero 2

let a = 10;
let b = 20;
let c;

c = a + b;
console.log("La suma de a + b es:",c);

c = a - b;
console.log("La resta de a - b es:",c);

c = a * b;
console.log("La multiplicación de a * b es:",c);

c = a / b;
console.log("La división de a / b es:",c);

// Comparaciones
console.log("a es mayor que b:",a > b);
console.log("a es menor que b:",a < b);
console.log("a es igual a b:",a == b);
console.log("a es diferente a b:",a != b);
console.log("a es mayor o igual que b:",a >= b);
console.log("a es menor o igual que b:",a <= b);

// Punto numero 3

let esMayorDeEdad = false;
let tieneLicencia = true;
let puedeManejar = esMayorDeEdad && tieneLicencia;
console.log("Verificacion de pruebas para conducir\n"+"BIENVANIDOS"+"\n¿Puede manejar: ?",puedeManejar);

let puedeManejarConErrores = esMayorDeEdad || tieneLicencia;
console.log("¿Puede manejar con errores: ?",puedeManejarConErrores);

// Punto numero 4

let nombreUsuario = prompt("¿Cuál es tu nombre?");
let edadUsuario = parseInt(prompt("¿Cuál es tu edad?"));
let esEstudiante2 = prompt("¿Eres estudiante? (sí/no)").toLowerCase() === "sí";
let mensaje = `Hola, ${nombreUsuario}.`;
mensaje += ` Tienes ${edadUsuario} años.`;

if (edadUsuario >= 18) {
 mensaje += " Eres mayor de edad.";
} else {
 mensaje += " Eres menor de edad.";
}
if (esEstudiante2) {
 mensaje += " Tienes derecho a un descuento por ser estudiante.";
}
console.log(mensaje);