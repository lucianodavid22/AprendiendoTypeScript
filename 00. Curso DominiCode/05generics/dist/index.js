"use strict";
// Generics
;
;
class Collection {
    constructor() {
        this.items = [];
        // getNames(): string[] {
        //     return this.items.map(e => e.name);
        // };
        // getItemByID(id: number): Person | undefined {
        //     return this.items.find(e => e.id === id);
        // };
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    ;
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    ;
}
;
const personCollection = new Collection();
const newData = {
    id: 1,
    name: 'Luciano'
};
personCollection.addItem(newData);
const productCollection = new Collection();
const newData2 = {
    id: 1,
    name: 'Beer',
    price: 100
};
productCollection.addItem(newData2);
personCollection.getItems();
productCollection.getItems();
