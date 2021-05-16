
// Interfaces do not set values for properties, only fields. This ensures that the contract is followed and the correct
// types are assigned to the proper fields when this object is instantiated


// define the interface
interface IProduct {
    id: number;
    name: string;
    description: string;
    price?: number; // optional propery
    display():void
}

// create an instance of Product inheriting from the interface 
var product1:IProduct = {
    id: 1,
    name: "Call of Duty Black Ops",
    description: "The OG",
    price: 59.99,
    display():void {
        console.log(this.id, this.name)
    }
}

var product2:IProduct = {
    id: 2,
    name: "Call of Duty Modern Warfare",
    description: "The latest COD game",
    display():void {
        console.log(this.id, this.name)
    }
}


product1.display()
product2.display()