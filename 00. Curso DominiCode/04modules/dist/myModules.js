"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerenateRandomNumber = exports.PI = void 0;
// Variable
exports.PI = 3.14;
;
// Function
function gerenateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
exports.gerenateRandomNumber = gerenateRandomNumber;
;
// Otra forma de exportar
// export {PI, Person, gerenateRandomNumber }
