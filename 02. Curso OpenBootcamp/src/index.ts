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

/////////////////////////////////////////////////////////////////////////////////////////

// Functions

function saludar(nombre: string = "User"): void {
    console.log(`¡Hola ${nombre}!`);
};

function despedida(nombre?: string): void{
    if(nombre){
        console.log(`¡Adios ${nombre}!`);
    }
    else{
        console.log("¡Adios!");
    }
};

function devolverNombre(nombre: string, apellido: string): string {
    return `${nombre} ${apellido}`;
};

interface Empleado {
    nombre: string;
    apellido: string;
    edad: number;
};

const empleado: Empleado = {
    nombre: "Luciano",
    apellido: "Dorregaray",
    edad: 21
};

const datosEmpleado = (e: Empleado): string => `${e.nombre} ${e.apellido} tiene ${e.edad} anyos`;

/* Persistencia de datos:
1. LocalStorage --> Almacena los datos en el navegador (No se elimina automaticamente)
2. SessionStorage --> Los datos persisten en la sesion del navegador
3. Cookies --> Tienen fecha de caducidad y tambien tienen un ambito de URL
*/

// LocalStorage -> set, get, remove, clear
function guardarEnLocalStorage (): void {
    //clave --> valor
localStorage.set("nombre", "Luciano");
};

function leerDeLocalStorage (): void {
localStorage.get("nombre");
};

