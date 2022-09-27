console.log("TypeScript en OpenBootcamp");
console.log("Hola");

// Variables
let nombre: string = "Luciano";

console.log("Hola, " + nombre);

let a: string, b: number, c: boolean;

// Arrays
let nombres: string[] = ["Luciano", "David"];
let valores: (string | number | boolean)[] = [false, true, 22, "Luciano", 7];

// Enum

enum Estados {
    "Completado" = 1,
    "Incompleto",//2
    "Pendiente"  //3
};

let estadoTarea: Estados = Estados.Pendiente;