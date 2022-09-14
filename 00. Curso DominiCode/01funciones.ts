// Functions

function greet (name: string = 'User'): void {
    console.log(`Hello, ${name.toUpperCase()} !!!`);
}

greet("luciano");


function getNumber(): number {
    return Math.floor(Math.random() * 100);
};

function printPosition(position: {lat: number, long?: number | string}): void {
    if(position.long){
        console.log(`Latitude & Longitude are: LAT: ${position.lat} LONG: ${position.long}`);
    }
    else{
        console.log(`Latitude & Longitude are: LAT: ${position.lat}`);
    }
};