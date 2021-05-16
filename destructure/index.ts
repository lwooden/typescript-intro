

var courses:any = ['Intro to Typescript', 'React Bootcamp']

var a = courses[0]
var b = courses[1]

// takes the first to elements, starting from the left, and assigns them to each variable in order
var [c,d] = courses


var student = {
    firstName: "Low",
    age: 30
}


// destructures the student object and allows me to access the property and it's value without dot notation
var {firstName, age} = student

console.log(c)
console.log(d)
console.log(firstName)
console.log(age)




