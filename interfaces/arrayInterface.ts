
// define the interface
interface StudentName {
    [index:number]:string; // [index:<type for the index>:<type for the values that the array will hold>
}

// array interfaces of type string are treated like objects internally
interface StudentScore {
    [index:string]:number
}

// define a variable that will "subcribe" to the interface
var studentNames:StudentName = ["John", "Zach"]

var studentScores:StudentScore = {} // treated like an object internally

// the indexes act like keys and the integers are the values { John: 100, Zach: 90 }
studentScores["John"] = 100
studentScores["Zach"] = 90

for (var item in studentScores) {
    // console.log(item) // print the keys
    console.log(studentScores[item]) // print the values
}