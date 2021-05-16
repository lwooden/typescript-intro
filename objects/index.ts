

// object literal
var student = {
    name: "Low",
    age: 19
}

for (var key in student) {
    console.log("Key:", key) // prints each key in the object
}

for (var val in student) {
    console.log("Value:", student[val]) // prints the values for each key
}


// console.log(student.name)