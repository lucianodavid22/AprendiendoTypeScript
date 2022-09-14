// Interfaces vs Clases

// Interfaces
// Es un "contrato" de codigo, es un molde.
// => Solo existen en tiempo de compilacion
// => Solo se usa para verificacion de tipos
// => Disponible en tiempo de desarrollo

interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;
    isLoan?: (id: number) => void
};

const book: Book = {
    id: 1,
    title: 'My title',
    author: 'Yo'
};

const books: Book[] = [];

function getBook(): Book {
    return { id: 1, title: 'My title', author: "yo"};
};

function createBook(book:Book): Book {
    return book;
};

// Extends
// las interfaces extienden
// las clases implementan interfaces => implements

interface Person {
    id: number;
    name: string;
};

interface Employee extends Person {
    city: string;
};

const yo: Employee = {
    id: 22,
    name: 'Luciano',
    city: 'Cordoba'
};

// Clases
// => Existen en tiempo de compilacion y ejecucion
// => Se puede crear instancias

// Access Control Keywords
// public => por defecto
// private => no se puede acceder al atributo/metodo fuera del scope de la clase
// protected => solo se tiene acceso si se extiende de esa clase, las clases hijas pueden acceder
// readonly => solo se puede leer, NO se puede reasignar

class Empleado {
    public id: number;
    name: string;
    depto: string;

    constructor(id: number, name: string, depto: string){
        this.id = id;
        this.name = name;
        this.depto = depto;
    };

    showName(): void {
        console.log(`${this.name}`);
    };
};

const emp = new Empleado(1, "Luciano", "Desarrollo");
