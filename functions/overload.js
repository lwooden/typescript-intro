// define the two paths of functionality the function will contain based on the type passed in
function doubleMe(x) {
    if (x && typeof x === 'number') {
        return x * 2;
    }
    else if (x && typeof x === 'string') {
        return x + ' ' + x;
    }
}
console.log(doubleMe(2));
console.log(doubleMe("Low"));
// console.log(doubleMe(true))
