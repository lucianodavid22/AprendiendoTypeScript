// => TIPOS DE DATOS

let username: string = 'lucianodavid22';
let numero: number = 22;
let booleano: boolean = true;

// Arrays

let arrayNumber: number[] = [1, 2, 3];
let arrayNumber2 : Array<number> = [1, 2, 3];
let arrayStrings: string[] = ["Luciano", "David"];

let arrayAny : any[] = [1, "luciano", true]; // usar lo menos posible ANY

// Tupla
// sabe cuantos elementos hay en el array y de que tipo son en cada posicion

let typlePlayers: [string, number, boolean] = ['David', 22, true];

let players: [number, string][];

players = [
    [10, "Messi"],
    [7, "Ronaldo"],
];

// Inferencia de tipos
// significa que Typescript asigna el tipo de dato a la variable
// segun el tipo de dato con el que se inicializa dicha variable

let miVariable; // no coloco el tipo de dato, sera any
let miVariable2: string = "luciano"; // coloco el tipo de dato, esta variable es string


// Unions => la variable puede ser de uno o mas tipos
let miVariable3: string | number | null; // esta variable puede ser string, number o null.

// Enum

enum Roles {
    User,      //0
    Admin,     //1
    SuperAdmin //2
};

enum Roles2 {
    User = 1,
    Admin = 2,
    SuperAdmin = 3
};

enum Roles3 {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPERADMIN"
};


// Objects

const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};


// Type Assertion
// convertir datos
// cuando typescript no sabe del todo que va a recibir se puede hacer esto
// typescript da por hecho que al hacer esto el programador sabe el tipo de dato

let channel : any = "StringDeEjemplo";

let channelStr = <string>channel;
let channelStr2 = channel as string;


