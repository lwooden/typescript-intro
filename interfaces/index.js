// Interfaces do not set values for properties, only fields. This ensures that the contract is followed and the correct
// types are assigned to the proper fields when this object is instantiated
// create an instance of Product inheriting from the interface 
var product1 = {
    id: 1,
    name: "Call of Duty Black Ops",
    description: "The OG",
    price: 59.99,
    display: function () {
        console.log(this.id, this.name);
    }
};
var product2 = {
    id: 2,
    name: "Call of Duty Modern Warfare",
    description: "The latest COD game",
    display: function () {
        console.log(this.id, this.name);
    }
};
product1.display();
product2.display();
