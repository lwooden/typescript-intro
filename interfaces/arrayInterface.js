// define a variable that will "subcribe" to the interface
var studentNames = ["John", "Zach"];
var studentScores = {};
studentScores["John"] = 100;
studentScores["Zach"] = 90;
for (var item in studentScores) {
    // console.log(item) // print the keys
    console.log(studentScores[item]); // print the values
}
