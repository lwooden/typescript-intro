// if you specify a return type in a function interface, you cannot change it's type in the function implementation
// if you do not specify a return type in a function interface, you have the freedom to change it in the function implementation


// define the interface
interface Add {
    (x: number, y: number): void
}

interface Sub {
    (x: number, y: number): number
}

// assign a variable that inherits the interface
var add:Add
var sub:Sub


// implement the interface however you like
add = function (x: number, y: number): void {
    console.log(x + y)
}

sub = function (x: number, y: number): number {
    return x - y
}