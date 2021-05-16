var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentFlyerNo) {
        if (frequentFlyerNo === void 0) { frequentFlyerNo = 0; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName, this.lastName, this.frequentFlyerNo);
    };
    return Passenger;
}());
var Flight = /** @class */ (function () {
    function Flight(flightNo, from, to) {
        this.flightNo = flightNo;
        this.from = from;
        this.to = to;
    }
    // flightTime:string // I can define properties not included in the interface
    Flight.prototype.display = function () {
        console.log(this.flightNo, this.from, this.to);
    };
    return Flight;
}());
var passenger = new Passenger("Lowell", "Wooden", 1250);
console.log(passenger);
passenger.display();
var flight = new Flight(0000, "Washington DC", "Mexico");
console.log(flight);
flight.display();
