
interface IFlight {
    flightNo:number
    from:string
    to:string

    display():void // display function SHOULD be implemented in each class
}

class Passenger {
    firstName:string
    lastName:string
    frequentFlyerNo:number

    constructor(firstName:string, lastName:string, frequentFlyerNo: number = 0) {
        this.firstName = firstName
        this.lastName = lastName
        this.frequentFlyerNo = frequentFlyerNo
    }

    display() {
        console.log(this.firstName, this.lastName, this.frequentFlyerNo)
    }

}

class Flight implements IFlight {
    flightNo:number
    from:string
    to:string
    // flightTime:string // I can define properties not included in the interface

    display() {
        console.log(this.flightNo, this.from, this.to)
    }

    constructor(flightNo:number, from:string, to:string) {
        this.flightNo = flightNo
        this.from = from
        this.to = to
    }
}


var passenger = new Passenger("Lowell", "Wooden", 1250)
console.log(passenger)
passenger.display()

var flight = new Flight(0000, "Washington DC", "Mexico")
console.log(flight)
flight.display()

