var x = 10;
var fname = "Erin";
var lname = "Wooden";
var isTrue = false;
var product = {
    name: "Call of Duty",
    type: "Video Game",
    Manufacturer: "Treyarch"
};
var array1 = ["Low", "Erin", "Low Jr", "Joe"];
var array2 = [2, 5, 10];
var array3 = [2, 5, 10, "Low", true];
function isThisLow() {
    if (fname == "Lowell" && lname == "Wooden") {
        isTrue = true;
        return "This is Low!";
    }
    else {
        return "This is not Low!!";
    }
}
console.log(x);
console.log(fname, lname);
console.log(isThisLow());
console.log(product);
console.log(array1);
console.log(array2);
console.log(array3);
