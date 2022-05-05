/*
console.log("hello world");

for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 0; i < 10; i++) {
    i = i + 2;
}

let frukter = ['Bananer', 'Äpplen', 'Apelsiner'];

for(let frukt of frukter) {
    console.log(frukt);
}

function print(message) {
    console.log(message);    
}

let writeMessage = print;
writeMessage("Hej på dig");


function add(a, b) {
    return a + b;
}

let result = add("57", "25");
console.log(result);


function print_messages(...messages) {
    for(let i = 0; i < messages.length; i++) {
        console.log(i, messages[i]);
    }
}

print_messages("Du behöver köpa", "Bananer", "Äpplen", "Apelsin", "Clementiner");


//ES6 syntax
class Car {
    constructor(doors, color, reg_plate) {
        this.doors = doors;
        this.color = color;
        this.reg_plate = reg_plate;
    }

    drive(fuel) {
        if(fuel == undefined) {
            console.warn("No fuel added");
        }

        let distance = 0;
        while (fuel > 0) {
            distance += 10;
            console.log(this.reg_plate, "drove", distance + "km");
            fuel -= 10;
        }
        console.log(this.reg_plate, "is out of fuel");
    }

}

let myCar = new Car(4, "Red", "ABC123");
console.log(myCar.reg_plate, "has the color", myCar.color);

myCar.drive();

*/


let number = 100 * Math.random();
console.log(number);