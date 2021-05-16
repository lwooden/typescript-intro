
// declare the function with only the types that line up with the logic you implemented below
// this way the user can only call the function with a number and a string; nothing else will work. compiler will throw error 
function doubleMe(x: number)
function doubleMe(x: string)

// define the two paths of functionality the function will contain based on the type passed in
function doubleMe(x: any) {
    if (x && typeof x === 'number') {
        return x*2
    } else if (x && typeof x === 'string') {
        return x + ' ' + x
    }
}

console.log(doubleMe(2))
console.log(doubleMe("Low"))
// console.log(doubleMe(true))
