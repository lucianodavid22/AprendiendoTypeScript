// Variable
export const PI = 3.14;

// Interface
export interface Person {
    id: number;
    name: string;
};

// Function
export function gerenateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
};

// Otra forma de exportar
// export {PI, Person, gerenateRandomNumber }
