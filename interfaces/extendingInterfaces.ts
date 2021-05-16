

interface Exterior {
    color:string
    numOfDoor:number
}

interface Interior {
    numOfSeats:number
    auto:boolean
}

interface Car extends Exterior,Interior {
    make:string
    model:string
    year:number
}

// the MyCar object must comply with ALL of the properties of each Interface defined above otherwise the compiler will complain
var MyCar:Car = {
    make: "Mercedes",
    model: "E300",
    year: 2017,
    color: "silver",
    numOfDoor: 4,
    numOfSeats: 4,
    auto: true
}

console.log(MyCar)