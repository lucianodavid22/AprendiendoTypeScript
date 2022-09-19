// Generics

interface Person {
    id: number;
    name: string;
};

interface Product {
    id: number;
    name: string;
    price: number;
};

interface Data<T> {
    addItem(newItem: T): void;
}

// Las T seran reemplazadas por el tipo de date que se le pase cuando se instancie la clase
class Collection<T extends { id: number, name: string}> implements Data<T> {
    private items: T[] = [];

    addItem(newItem: T): void {
        this.items.push(newItem);
    };

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items));
    };

    getNames(): string[] {
        return this.items.map(e => e.name);
    };

    getItemByID(id: number): Person | undefined {
        return this.items.find(e => e.id === id);
    };
};

const personCollection = new Collection<Person>();
const newData = {
    id: 1,
    name: 'Luciano'
};

personCollection.addItem(newData);

const productCollection = new Collection<Product>();
const newData2 = {
    id: 1,
    name: 'Beer',
    price: 100
};

productCollection.addItem(newData2);

personCollection.getItems();
productCollection.getItems();