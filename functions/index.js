function hello(name) {
    return "Hello " + name + "!";
}
var hello2 = function (name) {
    return "Hello Anonymous " + name + "!";
};
function add(num1, num2) {
    return num1 += num2;
}
function display(id, name, role) {
    console.log("id:", id);
    console.log("name:", name);
    console.log("role:", role);
}
function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
console.log(hello("Low"));
console.log(hello2("Low"));
display(1, "Low", "Founder");
var sub = calculator(); // calculator() returns the subtract function so we must assign it to a variable
console.log(sub(20, 5)); // invokes the subtract function by passing in two integers
