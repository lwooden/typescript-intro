
// These functions do not effect an objects state therefore we can make them static and make them accessible by referencing 
// the Parent Class itself (class level functions)

class Calculator {
    static sum(num1:number, num2:number):number {
        return num1+num2
    }

    static sub(num1:number, num2:number):number {
        return num1-num2
    }
}

console.log(Calculator.sum(10,10))
console.log(Calculator.sub(10,10))