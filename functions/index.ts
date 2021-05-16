// traditional function syntax
function hello(name: string):string {
    return `Hello ${name}!`
}

// anonymous function syntax (arrow function)
var hello2 = (name: string):string => {
    return `Hello Anonymous ${name}!`
}


function add(num1: number, num2: number):number {
    return num1 += num2
}

function display(id: number, name: string, role: string) {
    console.log("id:", id)
    console.log("name:", name)
    console.log("role:", role)
}

function calculator():any {

    function subtract(num1: number, num2: number):number {
        return num1-num2
    }
    return subtract
}


console.log(hello("Low"))
console.log(hello2("Low"))
display(1, "Low", "Founder")

var sub = calculator() // calculator() returns the subtract function so we must assign it to a variable
console.log(sub(20,5)) // invokes the subtract function by passing in two integers
